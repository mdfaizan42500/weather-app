import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
// import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    let img_url = "https://plus.unsplash.com/premium_photo-1661897016268-b77ad5186d02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hhdHRlcmQlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D";
    const Summer_url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMLSIiYgzRzRYYqjzfo4jZ9BuYAXINtFHDg&s";
    const Winter_url = "https://images.unsplash.com/photo-1516977103673-45be7d2850d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const Rain_url = "https://images.unsplash.com/photo-1679638606422-da84f4ebf62b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYXZ5JTIwcmFpbnxlbnwwfHwwfHx8MA%3D%3D";
   
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }} style={{width: 400}}>
      
        <CardMedia
          component="img"
          height="190"
          image={info.temp > 30 ? Summer_url : info.temp < 15? Winter_url : info.humidity > 70 ? Rain_url : img_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
              info.temp > 30 ? <LocalFireDepartmentIcon/> : info.temp < 20 ? <AcUnitIcon/> : info.humidity > 70 ? <ThunderstormIcon/> : <CloudQueueIcon/>
            }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C </p>
            <p>Temperature Min = {info.tempMin}&deg;C </p>
            <p>Temperature Max = {info.tempMax}&deg;C </p>
            <p>humidity = {info.humidity} </p>
            <p>feels like = {info.feelsLike}&deg;C </p>
            <p>weather = {info.weather} </p>
          </Typography>
        </CardContent>
      
    </Card>
        </div>
    )
}