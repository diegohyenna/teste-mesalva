import dayjs from "dayjs";
import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/card";
import Image from "../../components/image";
import Loading from "../../components/loading";
import { APIgetImages } from "../../services/api";
import { Colx12, Title, Date, Text, Button } from "../../styles";
import "./styles";

export default (props) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState("");

  useEffect(() => {
    APIgetImages(props.match.params.imageDetail)
      .then((result) => {
        if (result.media_type === "image") {
          setDetail(result);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loading, detail]);

  return (
    <Colx12>
      <Card>
        {loading && <Loading></Loading>}
        {!loading && (
          <React.Fragment>
            <a href={detail.hdurl}>
              <Image imageUrl={detail.url}></Image>
            </a>
            <Title type="subtitle" align="center">
              {detail.title}
            </Title>

            <Date align="center">
              {dayjs(detail.date).format("DD/MM/YYYY")}
            </Date>
            <hr />
            <Text>{detail.explanation}</Text>
            <Link component={Button} type="danger" to={`/`}>
              Voltar
            </Link>
          </React.Fragment>
        )}
      </Card>
    </Colx12>
  );
};
