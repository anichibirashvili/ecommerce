import { Button, FormControl, TextField, FormLabel } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import useForm from "../../app/hooks/useForm";
import { ProductContext, useProductContext } from "../../context/productContext";
import FileBase from "react-file-base64";

const generateAddProductFormValues = (selectedProduct) => {
  return {
    name: {
      value: selectedProduct?.name || "",
      required: true,
      error: "",
      validateInput: (name) =>
        name.length > 1 ? null : "name should have at least 2 charachter",
    },
    description: {
      value: selectedProduct?.description || "",
      required: true,
      error: "",
      validateInput: (description) =>
        description.length > 1
          ? null
          : "description should have at least 2 charachter",
    },
    category: {
      value: selectedProduct?.category || "",
      required: true,
      error: "",
      validateInput: (category) =>
        category.length > 1
          ? null
          : "category should have at least 2 charachter",
    },
    brand: {
      value: selectedProduct?.brand || "",
      required: true,
      error: "",
      validateInput: (brand) =>
        brand.length > 1 ? null : "brand should have at least 2 charachter",
    },
    price: {
      value: selectedProduct?.price || 0,
      required: true,
      error: "",
      validateInput: (price) =>
        price  > 0 ? null : "price should be possitive number",
    },
  };
};


const ProductForm=() => {
    const {formValues: productFormValues, onInputChange, setFormValues} = useForm({
        defaultFormValues: generateAddProductFormValues()
    });

    const {saveProduct, selectedProduct} = useContext(ProductContext)

    const [image, setImage] = useState("");

    const saveProductHandler = () => {
        const name = productFormValues.name.value;
        const description = productFormValues.description.value;
        const category = productFormValues.category.value;
        const brand = productFormValues.brand.value;
        const price = productFormValues.price.value;
        saveProduct({name, description, category, brand, price, image});
       
    }

    useEffect(() => {
        if(selectedProduct) {
            setFormValues(generateAddProductFormValues(selectedProduct))
        }
    },[selectedProduct])

    return ( <FormControl>
    <TextField
      name="name"
      value={productFormValues.name.value}
      onChange={onInputChange}
      error={!!productFormValues.name.error}
      helperText={!!productFormValues.name.error}
      label={"name"}
      margin="dense"
    />
    <TextField
      name="description"
      value={productFormValues.description.value}
      onChange={onInputChange}
      error={!!productFormValues.description.error}
      helperText={!!productFormValues.description.error}
      label={"description"}
      margin="dense"
    />
    <TextField
      name="category"
      value={productFormValues.category.value}
      onChange={onInputChange}
      error={!!productFormValues.category.error}
      helperText={!!productFormValues.category.error}
      label={"category"}
      margin="dense"
    />
    <TextField
      name="brand"
      value={productFormValues.brand.value}
      onChange={onInputChange}
      error={!!productFormValues.brand.error}
      helperText={!!productFormValues.brand.error}
      label={"brand"}
      margin="dense"
    />
    <TextField
      name="price"
      type="number"
      value={productFormValues.price.value}
      onChange={onInputChange}
      error={!!productFormValues.price.error}
      helperText={!!productFormValues.price.error}
      label={"price"}
      margin="dense"
    />

    <FileBase
      type="file"
      multiple={false}
      onDone={({ base64 }) => setImage(base64)}
    />

     <Button  onClick={saveProductHandler}>
      Save
    </Button> 
  </FormControl>
);
}

export default ProductForm;
