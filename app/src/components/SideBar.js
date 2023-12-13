"use client"

import { Box, List, ListItem, ListItemButton,ListItemText, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";

import getSongsNames from "@/utils/readFromJSON";

export default function SideBar({changeSong}) {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            setSongs(await getSongsNames());
          } catch (error) {
            console.error('Error fetching JSON data:', error);
          }
        }
    
        fetchData();
      }, []);
    

    return (

        <Box sx={{ overflow: "auto", width: "20%" }}>
          <List>
              <ListItem disablePadding>
                    <ListItemText primary={
                      <Typography 
                        variant="body1" 
                        fontWeight="bold" 
                        textAlign="center"  
                      >
                        Cantece
                      </Typography>
                    } />
              </ListItem>

              {songs?.map((text) => (
              <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => changeSong(text)}>
                  <ListItemText primary={text} />
                  </ListItemButton>
              </ListItem>
              ))}
          </List>
        </Box>

    );
}
