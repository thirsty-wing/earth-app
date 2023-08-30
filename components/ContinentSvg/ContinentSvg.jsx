import Africa from "./Africa";
import Antarctica from "./Antarctica";
import Asia from "./Asia";
import Europe from "./Europe";
import NorthAmerica from "./NorthAmerica";
import Oceania from "./Oceania";
import SouthAmerica from "./SouthAmerica";


/**
 * Continent SVG based on code prop
 *
 * @param {object} props
 * @param {string} [props.code] a two-letter code for a continent
 * @returns {JSX.Element} a continent SVG or a fragment if the code was invalid
 */
function ContinentSvg(props) {

  const {
    code,
  } = props;

  switch(code) {
  case "AF":
    return(<Africa/>);
  case "AN":
    return(<Antarctica/>);
  case "AS":
    return(<Asia/>);
  case "EU":
    return(<Europe/>);
  case "NA":
    return(<NorthAmerica/>);
  case "OC":
    return(<Oceania/>);
  case "SA":
    return(<SouthAmerica/>);
  default:
    return(<></>);
  }

}

export default ContinentSvg;
