"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label = "Upload", name = "image" }) => {
  const inputRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  function handleClick() {
    inputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setSelectedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!selectedImage && <p>No image picked</p>}
          {selectedImage && (
            <Image src={selectedImage} fill alt="Image selected by user" />
          )}
        </div>
        <input
          className={classes.input}
          name={name}
          id={name}
          type="file"
          accept="image/png, image/jpeg"
          ref={inputRef}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
