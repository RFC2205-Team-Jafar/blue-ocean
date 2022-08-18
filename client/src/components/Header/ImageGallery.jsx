import React, { Component } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function HeaderGallery() {
  return (
    <ImageList
      sx={{ width: "100vw", height: "450", marginTop: "80px" }}
      variant="quilted"
      cols={6}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1616587896846-496b91f59f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60",
    title: "Man Working",
  },
  {
    img: "https://images.unsplash.com/photo-1634087990018-415aeb951215",
    title: "Lady Writing",
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    title: "Laptop Hand",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdvcmtwbGFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=60",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    title: "Coffee Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
    title: "Office",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1573496546038-82f9c39f6365",
    title: "Colleagues Talking",
    cols: 2,
  },
];
