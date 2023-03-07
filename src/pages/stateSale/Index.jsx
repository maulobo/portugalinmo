import React, { useState } from "react";
import { ContainerII } from "../../components/ContainerII";
import { DivMio } from "../../components/DivMio";
import { HeroPages } from "../../components/Main/HeroPages";
import { Navbaar } from "../../components/Main/Navbar";
import state from "../../components/Images/ima1.jpg";
import { Button } from "../../components/Main/Btns";
import RenderCard1 from "../../components/Main/RenderCard1";
import RenderCard2 from "../../components/Main/RenderCard2";
import { ContainerIII } from "../../components/ContainerIII";

const propiedadesMuestra = [
  {
    name: "Casa de campo",
    localization: "Agua de Oro, Sierras Chicas",
    kindOfProperty: "casa",
    antiquity: "NO SE SABE",
    operation: "venta",
    surface: "2000 mts",
    writing: "con escritura",
    description:
      "Terreno totalmente alambrado con dos ingresos, con portones de madera, ademas posee un Quincho cubierto con termotanque eléctrico",
    description2: "casa en altura con vistas a las Sierras Chicas",
    description3:
      "Gas envasado con posibilidad de conección a de gas  natural por zona",
    services: [],
    cochera: "Posee cochera para dos autos",
    bathroom: "2 baños",
    room: "dos",
    kitchen: "cocina separada con termotanque",
    price: "USD 120.000",
    img: "",
    images: "",
  },
  {
    id: 2,
    name: "Casa en Arguello",
    localization: "Arguello, zona Norte, Córdoba Capital.",
    kindOfProperty: "casa",
    antiquity: "NO SE SABE",
    operation: "venta",
    surface: "FALTA",
    writing: "FALTA",
    description:
      "Posee calefación centralizada con radiadores, ademas cuanta con aires acondicionados.dormitorios, 1 dormitorio en suite con jacuzzi",
    description2:
      "posee un ampli living-comedor, sala de estar, portón levadizo, alarma perimetral, riego por aspersión, pisos de porcelanato y entablonados de madera",
    description3:
      "Posee cochera para dos autos, además la casa cuenta con; Quincho, plieta, galería, lavadero, cuarto de servicio ubicado en el pátio con baño y ducha separada",
    services: [],
    cochera: "Amplia",
    bathroom: "CUANTOS?",
    room: "tres",
    kitchen: "cocina-comedor",
    price: "USD 280.000",
    img: "",
    images: "",
  },
  {
    id: 3,
    name: "Casa en Arguello II",
    localization: "Juan Nepper al 6300, Arguello, zona norte, Córdoba capital",
    kindOfProperty: "departamento",
    antiquity: "30 años",
    operation: "venta",
    surface: "750",
    //surface:{Terreno: "750m²", SuperficieTotal: "150m²", cubierta: "150m²"},
    writing: "NO SE SABE",
    description:
      "Esta casa de 5 ambientes es ideal para quienes buscan una propiedad con historia y personalidad. Con 30 años de antigüedad y una renovación completa, cuenta con una excelente distribución de espacios y una orientación oeste que garantiza una gran luminosidad. Además, su patio muy grande es perfecto para disfrutar del aire libre y de momentos en familia o con amigos.",
    description2:
      " Esta propiedad es una oportunidad única para vivir en un hogar con estilo y comodidad, no dude en comunicarse para acordar una visita.",
    description3: "",
    services: [
      "Agua corriente",
      "Electricidad",
      "Cable",
      "Gas natural",
      "Pavimento",
      "Internet",
      "Teléfono",
    ],
    cochera: "Posee cochera para dos autos",
    bathroom: "3 baños",
    room: "tres",
    kitchen: "separada refaccionada completamente",
    price: "USD 210.000",
    img: "",
    images: "",
  },
];

const StateSale = () => {
  const [tipo, setTipo] = useState("");
  const [local, setLocal] = useState("");
  const [rooms, setRooms] = useState("");
  const [search, setSearch] = useState(false);

  const handleSelectTipo = (e) => {
    setTipo(e.target.value);
    setSearch(false);
  };
  const handleSelectLocal = (e) => {
    setLocal(e.target.value);
    setSearch(false);
  };
  const handleSelectRooms = (e) => {
    setRooms(e.target.value);
    setSearch(false);
  };

  const handleClick = (e) => {
    setSearch(true);
  };
  return (
    <>
      <Navbaar />
      <HeroPages>
        <h2>PROPIEDADES EN VENTA</h2>
      </HeroPages>
      <ContainerII className="container-state">
        <div className="p-stateCont">
          <p className="p-state">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            dignissimos odit velit, recusandae rerum itaque corrupti possimus
            iure dolor iste esse placeat temporibus eius labore at tempore non
            excepturi quis?
          </p>
        </div>
        <DivMio>
          <img src={state} alt="state" className="fotito" />
        </DivMio>
        <DivMio icons2>
          <select
            name="tipo"
            id="tipo"
            className="select-state"
            onChange={handleSelectTipo}
          >
            <option value="" selected>
              Tipo de propiedad
            </option>
            <option value="departamento">Departamento</option>
            <option value="casa">Casa</option>
            <option value="lote">Lote</option>
          </select>
          <select
            name="Ubicación"
            id="Ubicación"
            className="select-state"
            onChange={handleSelectLocal}
          >
            <option value="" selected>
              Ubicación
            </option>
            <option value="arguello">Argüello</option>
            <option value="aguadeoro">Agua de Oro</option>
          </select>
          <select
            name="Habitaciones"
            id="Habitaciones"
            className="select-state"
            onChange={handleSelectRooms}
          >
            <option value="" selected>
              Habitaciones
            </option>
            <option value="una">Una</option>
            <option value="dos">Dos</option>
            <option value="tres">Tres</option>
          </select>

          <Button onClick={handleClick} className="btn-extras">
            BUSCAR
          </Button>
        </DivMio>
      </ContainerII>
      <ContainerIII>
        {search &&
          propiedadesMuestra
            .filter((el) => el.kindOfProperty.toLowerCase().includes(tipo))
            .filter((el) => el.localization.toLowerCase().includes(local))
            .filter((el) => el.room.toLowerCase().includes(rooms))
            .map((el, id) => {
              if (el.id % 2 == 0) {
                return (
                  <RenderCard1
                    name={el.name}
                    description={el.description}
                    key={id}
                  />
                );
              } else {
                return (
                  <RenderCard2
                    name={el.name}
                    description={el.description}
                    key={id}
                  />
                );
              }
            })}
      </ContainerIII>
    </>
  );
};

export { StateSale };
