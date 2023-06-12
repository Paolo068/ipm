import React, { memo, useContext } from "react";
import {
  Card,
  Link,
  Typography,
  Box,
  Container,
  IconButton,
  CardContent,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIcon from "@mui/icons-material/Create";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ProjectsContext } from "./Contexts";

const ALLOWED_WORDS = 100;

function MainContent() {
  const { data, filteredData } = useContext(ProjectsContext);

  return (
    <Box sx={{ paddingY: 4 }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {(filteredData == "" ? data : filteredData).map((item, key) => (
          <Card
            id={item.id }
            key={key}
            sx={{
              width: "300px",
              border: "1px solid #ccc",
              wordBreak: "break-all",
              ":hover .hidden-btn": { visibility: "visible", opacity: 1 },
              transition: "visibility 0.3s linear, opacity 0.3s linear",
            }}
          >
            <Box
              className="hidden-btn"
              sx={{
                visibility: "hidden",
                opacity: 0,
                textAlign: "end",
                transition: "visibility 0.3s linear, opacity 0.2s linear",
              }}
            >
              <IconButton>
                <VisibilityIcon />
              </IconButton>
              <IconButton>
                <CreateIcon />
              </IconButton>
              <IconButton>
                <DeleteForeverIcon />
              </IconButton>
            </Box>

            <CardContent>
              <Typography variant="h5">{item.name}</Typography>
              <Typography sx={{ marginY: 2 }}>
                Link: <Link href={item.link}>{item.link}</Link>{" "}
              </Typography>
              <Typography>
                Description:
                {item.description.length < ALLOWED_WORDS
                  ? item.description
                  : `${item.description.slice(0, 100)}...`}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
export default memo(MainContent);
