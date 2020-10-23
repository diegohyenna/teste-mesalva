import React, { useEffect, useState, Fragment } from "react";

import { Title } from "./styles";

import { APIgetImages } from "../../services/api";

import dayjs from "dayjs";

import Gallery from "../../components/gallery";
import {
  Row,
  Colx12,
  Jumbotron,
  Colx6,
  Colx4,
  Colx2,
  SearchButton,
} from "../../styles";
import Loading from "../../components/loading";

export default (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageDetails, setImageDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [countImages, setCountImages] = useState("");

  const onSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const onCountImages = (evt) => {
    setCountImages(evt.target.value);
  };

  const onSubmit = (search, countImages) => {
    console.log(search);
    console.log(Date.now(search));
    console.log(countImages);
    search = Date.now(search);
    getImages(search, countImages);
  };

  const getImages = async (date, countImages) => {
    setItems([]);
    setImageDetails([]);
    let index = countImages;
    let searchDate = dayjs(date);
    setLoading(true);
    while (index > 0) {
      await APIgetImages(searchDate.format("YYYY-MM-DD"))
        .then((result) => {
          if (result.media_type === "image") {
            imageDetails.push(result);
          } else if (result.error) {
            index = 0;
            return;
          } else {
            index++;
          }
        })
        .catch((error) => {
          console.log(error);
          index = 0;
        });

      searchDate = searchDate.subtract(1, "day");
      console.log(index);
      index--;
    }
    setItems(imageDetails);
    setLoading(false);
  };

  return (
    <React.Fragment>
      <Jumbotron>
        <Row>
          <Colx12>
            <Title align="center">Galeria de Imagens</Title>
            <Row>
              <Colx6>
                <input
                  type="text"
                  name="search"
                  placeholder="Pesquise aqui por uma data (dd/mm/yyyy)"
                  value="23/10/2020"
                  onChange={onSearch}
                />
              </Colx6>
              <Colx4>
                <select onChange={onCountImages}>
                  <option value>Quantidade a pesquisar</option>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                </select>
              </Colx4>
              <Colx2>
                <SearchButton onClick={() => onSubmit(search, countImages)}>
                  Pesquisar
                </SearchButton>
              </Colx2>
            </Row>
          </Colx12>
        </Row>
      </Jumbotron>
      <Row>
        <Colx12>
          {loading && <Loading></Loading>}
          {!loading && <Gallery props={props} items={items}></Gallery>}
        </Colx12>
      </Row>
    </React.Fragment>
  );
};
