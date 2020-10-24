import React, { useState, Fragment } from "react";

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
  Alert,
} from "../../styles";

import Loading from "../../components/loading";

import { inverseDate, sanitarizeDate } from "../../helpers/helper";

import InputMask from "react-input-mask";

export default (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageDetails, setImageDetails] = useState([]);
  const [date, setDate] = useState("");
  const [countImages, setCountImages] = useState("");
  const [error, setError] = useState("");

  const onDate = (evt) => {
    setDate(evt.target.value);
  };

  const onCountImages = (evt) => {
    setCountImages(evt.target.value);
  };

  const onSubmit = (date, countImages) => {
    setError("");
    if (!date) {
      setError({
        attr: "date",
        message: "O campo de data precisa ser preenchido!",
      });
      return;
    } else if (sanitarizeDate(date).length < 8) {
      setError({
        attr: "date",
        message: "O campo de data contém uma data inválida",
      });
      return;
    } else if (!countImages) {
      setError({
        attr: "countImages",
        message:
          "Precisa ser informada uma quantidade de imagens para pesquisar!",
      });
      return;
    }
    getImages(dayjs(inverseDate(date)), countImages);
  };

  const getImages = async (date, countImages) => {
    let index = countImages;
    let searchDate = dayjs(date);

    setItems([]);
    setImageDetails([]);
    setLoading(true);

    while (index > 0) {
      await APIgetImages(searchDate.format("YYYY-MM-DD"))
        .then((result) => {
          if (result.media_type === "image") {
            imageDetails.push(result);
          } else if (result.error) {
            index = 0;
            setError({
              attr: "search",
              message:
                "Aconteceu algum problema, verifique se as informações nos campos estão corretas e tente novamente!",
            });
            return;
          } else {
            index++;
          }
        })
        .catch((error) => {
          index = 0;
        });

      searchDate = searchDate.subtract(1, "day");
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
              <Colx6 sm={"100%"}>
                <InputMask
                  mask="99/99/9999"
                  name="date"
                  placeholder="Pesquise aqui por uma data (dd/mm/yyyy)"
                  onChange={onDate}
                  value={date}
                ></InputMask>
                {error && error["attr"] === "date" && (
                  <Alert>{error["message"]}</Alert>
                )}
              </Colx6>
              <Colx4 sm={"100%"}>
                <select onChange={onCountImages}>
                  <option value>Quantidade de imagens</option>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                </select>
                {error && error["attr"] === "countImages" && (
                  <Alert>{error["message"]}</Alert>
                )}
              </Colx4>
              <Colx2 sm={"100%"}>
                <SearchButton onClick={() => onSubmit(date, countImages)}>
                  Pesquisar
                </SearchButton>
              </Colx2>
            </Row>
          </Colx12>
        </Row>
      </Jumbotron>
      <Row>
        <Colx12>
          {error && error["attr"] === "search" && (
            <Alert>{error["message"]}</Alert>
          )}
          {loading && <Loading></Loading>}
          {!loading && <Gallery props={props} items={items}></Gallery>}
        </Colx12>
      </Row>
    </React.Fragment>
  );
};
