import React, { useEffect, useState } from "react";
import Image from "../components/image";
import { Colx4, Row, Title, Button, Date } from "../styles";
import Card from "./card";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export default ({ props, items }) => {
  const [imageDetails, setImageDetails] = useState("");

  useEffect(() => {
    setImageDetails(items);
  });

  return (
    <Row style={{ marginTop: "50px" }}>
      {items &&
        items.map((item, index) => (
          <Colx4 key={index}>
            <Card>
              <Image imageUrl={item.url}></Image>
              <Title type="subtitle">{item.title}</Title>

              <Date>{dayjs(item.date).format("DD/MM/YYYY")}</Date>
              <hr />

              <Link
                component={Button}
                type="primary"
                to={`/image/${item.date}`}
              >
                Abrir detalhes
              </Link>
            </Card>
          </Colx4>
        ))}
    </Row>
  );
};
