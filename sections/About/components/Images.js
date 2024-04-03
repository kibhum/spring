"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImageCard({ path, title, description }) {
  return (
    <Card sx={{width:"100%"}}>
      <CardMedia
        sx={{ height: 500, objectFit: "cover" ,p:2}}
        image={path}
        title={title}
      />
      <CardContent>
        <Typography  variant="h3"  sx={{width:"100%", textAlign:"center",textTransform:"uppercase"}}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{width:"100%", textAlign:"center", textTransform:"uppercase"}}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
