import "./styles.css";
import React, { useState } from "react";
const productTypesSizeAttributesList = [
  [
    {
      product_type_id: "1",
      attribute_id: "1",
      attribute_name: "Achara Cloth",
      product_type_method_id: 3,
      product_type_type_id: 3,
      product_type_unit_id: 4,
      attribute_gif_url: "https://i.imgur.com/cr0LVC7.jpg",
      attribute_youtube_video: "video id1",
      attribute_value_description_id: "1,2,3,4",
      attribute_value: [
        {
          attributeValue: "Bombay Wear",
          isSelected: false
        },
        {
          attributeValue: "Terry Cotton",
          isSelected: false
        },
        {
          attributeValue: "Nylon",
          isSelected: false
        },
        {
          attributeValue: "Sutti",
          isSelected: false
        }
      ],
      attribute_description: [
        {
          attributeDescription: "Highest Quality"
        },
        {
          attributeDescription: "Average Choosed"
        },
        {
          attributeDescription: "Silky Cloth"
        },
        {
          attributeDescription: "Old Aged "
        }
      ],
      price_per_m: null
    },
    {
      product_type_id: "1",
      attribute_id: "2",
      attribute_name: "Achara Length",
      product_type_method_id: 3,
      product_type_type_id: 1,
      product_type_unit_id: 3,
      attribute_gif_url: "https://i.imgur.com/cr0LVC7.jpg",
      attribute_youtube_video: "video id2",
      attribute_value_description_id: "5,6,7,8,9,12,13,14",
      attribute_value: [
        {
          attributeValue: "3.5",
          isSelected: false
        },
        {
          attributeValue: "4",
          isSelected: false
        },
        {
          attributeValue: "4.5",
          isSelected: false
        },
        {
          attributeValue: "5",
          isSelected: false
        },
        {
          attributeValue: "5.5",
          isSelected: false
        },
        {
          attributeValue: "6",
          isSelected: false
        },
        {
          attributeValue: "6.5",
          isSelected: false
        },
        {
          attributeValue: "7 ",
          isSelected: false
        }
      ],
      attribute_description: [
        {
          attributeDescription: "small"
        },
        {
          attributeDescription: "medium"
        },
        {
          attributeDescription: "standard"
        },
        {
          attributeDescription: "standard"
        },
        {
          attributeDescription: "large"
        },
        {
          attributeDescription: "large"
        },
        {
          attributeDescription: "very large"
        },
        {
          attributeDescription: "very large"
        }
      ],
      price_per_m: "270"
    }
  ],
  [
    {
      product_type_id: "2",
      attribute_id: "4",
      attribute_name: "Khadki Cloth",
      product_type_method_id: 3,
      product_type_type_id: 3,
      product_type_unit_id: 3,
      attribute_gif_url: "https://i.imgur.com/cr0LVC7.jpg",
      attribute_youtube_video: "video id4",
      attribute_value_description_id: "10,11",
      attribute_value: [
        {
          attributeValue: "Hand Made",
          isSelected: false
        },
        {
          attributeValue: "Ready Made",
          isSelected: false
        }
      ],
      attribute_description: [
        {
          attributeDescription: "Mostly Choosed"
        },
        {
          attributeDescription: "Low Cost"
        }
      ],
      price_per_m: null
    },
    {
      product_type_id: "2",
      attribute_id: "6",
      attribute_name: "khadki Color",
      product_type_method_id: 3,
      product_type_type_id: 3,
      product_type_unit_id: 4,
      attribute_gif_url: "https://i.imgur.com/cr0LVC7.jpg",
      attribute_youtube_video: "video id 6",
      attribute_value_description_id: "19,20",
      attribute_value: [
        {
          attributeValue: "white",
          isSelected: false
        },
        {
          attributeValue: "mix",
          isSelected: false
        }
      ],
      attribute_description: [
        {
          attributeDescription: "poorly choosed"
        },
        {
          attributeDescription: "highly choosed"
        }
      ],
      price_per_m: null
    }
  ],
  [
    {
      product_type_id: "3",
      attribute_id: "5",
      attribute_name: "Blouse Size",
      product_type_method_id: 3,
      product_type_type_id: 1,
      product_type_unit_id: 3,
      attribute_gif_url: "https://i.imgur.com/cr0LVC7.jpg",
      attribute_youtube_video: "video id",
      attribute_value_description_id: "15,16,17,18",
      attribute_value: [
        {
          attributeValue: "15",
          isSelected: false
        },
        {
          attributeValue: "20",
          isSelected: false
        },
        {
          attributeValue: "25",
          isSelected: false
        },
        {
          attributeValue: "30",
          isSelected: false
        }
      ],
      attribute_description: [
        {
          attributeDescription: "small"
        },
        {
          attributeDescription: "medium"
        },
        {
          attributeDescription: "standard"
        },
        {
          attributeDescription: "large"
        }
      ],
      price_per_m: null
    }
  ]
];

const productTypes = [
  {
    product_type_name: "Achara Cloth"
  },
  {
    product_type_name: "Khadki "
  },
  {
    product_type_name: "Blouse"
  }
];

// product size attribute overall boxes
const ProductSizeAttribtutes = React.memo(
  ({ productTypesSizeAttributes, value, setValue }) => {
    return (
      <div>
        {productTypesSizeAttributes.map((obj) => {
          return (
            <ProductSizeAttributesSingle
              key={obj.attribute_name}
              obj={obj}
              value={value}
              setValue={setValue}
            ></ProductSizeAttributesSingle>
          );
        })}
      </div>
    );
  }
);

const ProductSizeAttributesSingle = React.memo(({ obj, value, setValue }) => {
  // const [theTabValue, setTheTabValue] = useState(0);
  // const [container, setContainer] = useState(obj);
  return (
    <div>
      <div className="select__size__attributes__container">
        <div className="select__title__image">
          <div className="attribute_name"> SELECT {obj.attribute_name}:</div>
          <div className="gif__url__video__conversion">
            <div>
              <img src={obj.attribute_gif_url} alt="gif url" height="70px" />
            </div>
          </div>
        </div>

        <IndividualSelectingAttributeContainer
          obj={obj}
          value={value}
          setValue={setValue}
          // container={container}
          // setContainer={setContainer}
        ></IndividualSelectingAttributeContainer>
      </div>

      <hr />
    </div>
  );
});

const IndividualSelectingAttributeContainer = React.memo(
  ({ obj, value, setValue }) => {
    // const [container, setContainer] = useState(obj.attribute_value);
    // const attributeDescriptionContainer = obj && obj.attribute_description;

    const onClick = (item, index) => {
      setValue({ ...value, [item]: index });
    };

    console.log("sta", value);
    return (
      <div className="selecting_size_containers_div">
        {obj.attribute_value.map((objAv, index) => {
          return (
            <SelectingSizeAttributesContainer
              key={`${obj.attribute_name}${index}`}
              attribute_value={objAv.attributeValue}
              item={obj.attribute_name}
              selected={index === value[obj.attribute_name]}
              index={index}
              onClick={onClick}
            ></SelectingSizeAttributesContainer>
          );
        })}
      </div>
    );
  }
);

// selecting size attributes container
const SelectingSizeAttributesContainer = React.memo(
  ({
    attribute_value,
    attribute_description,
    selected,
    index,
    onClick,
    item
  }) => {
    return (
      <div
        className={`selecting_size_containers_div_tab ${
          selected && "activated_selected_containers"
        }`}
        onClick={() => {
          onClick(item, index);
        }}
      >
        <div className="attribute_value">{attribute_value}</div>
        {/* <div className="attribute_description">{attribute_description}</div> */}
      </div>
    );
  }
);

const ProductTypesTable = React.memo(
  ({ productTypes, productTypesSizeAttributesList }) => {
    const [value, setValue] = useState(0);
    const [subValue, setSubValue] = useState({});

    // product_type_id

    return (
      <div className="size__table__product__types__attributes__container">
        <div className="size__table__product__types__container">
          {productTypes.map((obj, index) => {
            return (
              <ProductTypesTableTabs
                index={index}
                name={obj.product_type_name}
              ></ProductTypesTableTabs>
            );
          })}
        </div>
        <div className="size__table__attributes">
          {/* {ProductSizeAttribtutesDivs[value]} */}
          <ProductSizeAttribtutes
            productTypesSizeAttributes={productTypesSizeAttributesList[value]}
            value={subValue}
            setValue={setSubValue}
          ></ProductSizeAttribtutes>
        </div>
        <div className="total__price__of__size__attribute">Total Price:</div>
      </div>
    );

    function ProductTypesTableTabs({ name, index }) {
      return (
        <div
          className={`size__table__product__types inactive_btn__size__table ${
            index === value && "active_btn__size__table"
          }`}
          onClick={() => {
            setValue(index);
          }}
        >
          <div className="size__table__product__types__title">{name}</div>
        </div>
      );
    }
  }
);

export default function App() {
  return (
    <div className="App">
      <ProductTypesTable
        productTypes={productTypes}
        productTypesSizeAttributesList={productTypesSizeAttributesList}
      ></ProductTypesTable>
    </div>
  );
}
