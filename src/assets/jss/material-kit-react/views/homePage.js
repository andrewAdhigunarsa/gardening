import { container, title } from "assets/jss/material-kit-react.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const homePage = {
    container: {
        marginTop:'2em',
        marginBottom:'1em',
        zIndex: "12",
        color: "#333333",
        ...container
    },
    formContainer: {
        marginTop:'4em',
        paddingTop:'4em',
        marginBottom:'1em',
        zIndex: "12",
        color: "#333333",
        ...container
    },
    title: {
        ...title,
        display: "block",
        position: "relative",
        textAlign: "center",
        marginTop: "30px",
        minHeight: "32px",
        color: "#333333",
        textDecoration: "none",
        textShadow: " 1px 1px 16px rgba(255, 255, 255, 0.84)",
    },
    subtitle: {
        fontSize: "1.313rem",
        margin: "10px auto 0",
        fontWeight:"500",
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    card: {
        padding: '3em',
    },
    paragraph:{
        fontSize: "1rem",
    },
    svg: {
      textAlign:'center',
      marginLeft:'auto',
      marginRight:'auto',
      width: '70%',
    },
    ...imagesStyles
};

export default homePage;
