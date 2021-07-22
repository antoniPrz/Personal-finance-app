import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

 :root{

 --background: #F0F2F5;
 --blue: #5429CC;
 --blue-light: #6933ff;
 --green: #33CC95;
 --red: #E62E4D;
 --shape-main: #FFFFFF;
 --text-title: #363F5F;
 --text-body: #969CB3;



 }

 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html{

    @media (max-width:1080px){
        font-size: 93.75%;
    }

     @media (max-width: 720px){
         font-size: 87.5%;
     }
 }

 body{

    background: var(---background) ;

    //esto es para que las fuente se vena mas definidas en navegadores cuando usan webkit
    -webkit-font-smoothing: antialiased;
 }

 //se hace de esta forma ya que por defecto los textos en las etiquetas deiferentes del body no toman la fuente del body
 // son independientes , entonces aqui forzamos a todos estos campos usar la mima fuente 
 body , input , textarea ,button {
 font-family: 'poppins' , sans-serif;
 font-weight: 400;
 }

 h1, h2 ,h3 ,h4 ,h5 ,h6 ,strong {
     font-weight: 600;
 }

 button{
     cursor: pointer;
 }

 [disabled] {
     opacity: 0.6;
     cursor: not-allowed;
 }

`