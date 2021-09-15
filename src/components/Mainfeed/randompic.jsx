
import Happyguy from "./mainpagepictures/happyguy.png";
import Sadguy from "./mainpagepictures/Sadguy.png";
import Happygirl from "./mainpagepictures/happygirl.png";
import Girl from "./mainpagepictures/girl.png"
import Girl2 from "./mainpagepictures/Girl2.png"
function RandomPicture(){
    const picture = [Happyguy,Sadguy,Happygirl,Girl,Girl2][Math.floor(Math.random() * 5)];

return(
     <div className="happyguypicture"> <img src={picture} alt="HAPPYGUY"/></div>
)
    
}

export default RandomPicture