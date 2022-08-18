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
      sx={{ width: "100vw", height: "450" }}
      variant="quilted"
      cols={6}
      rowHeight={"17vh"}
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
    img: "https://images.unsplash.com/photo-1628017997653-a31314c14cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHdvcmtpbmclMjBncmVlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
    title: "Lady Green Couch",
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Laptop Hand",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1507207908229-c59ddb730e40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdvcmtpbmclMjBncmVlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60",
    title: "Man Walking Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1611095973763-414019e72400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=60",
    title: "Man Laptop Green",
  },
  {
    img: "https://images.unsplash.com/photo-1534166998141-a8746ef4ab6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGdyZWVuJTIwb2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Coffee Laptop",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1573496546038-82f9c39f6365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJ1c2luZXNzJTIwd29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Colleagues Talking",
    cols: 2,
  },
];
