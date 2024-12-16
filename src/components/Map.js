import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const baseUri = "https://maps.google.com/maps?width=5%25&amp;height=10&amp;hl=pt&amp;q="
const ending = "&t=&z=18&ie=UTF8&iwloc=B&output=embed"
const addresses = [
    // "Rua do Ouvidor, Rio de Janeiro, Brasil",
    // "Largo da Carioca, Rio de Janeiro, Brasil",
    "Instituto Infnet, Rio de Janeiro, Brasil",
    // "Confeitaria Colombo R. Gonçalves Dias, 32 , Rio de Janeiro, Brasil",
    // "Praça Mario Lago, Rio de Janeiro, Brasil",
    // "Catedral Metropolitana de São Sebastião do Rio de Janeiro, Rio de Janeiro, Brasil",
    // "McDonald's R. São José, 70, Rio de Janeiro, Brasil",
    // "Teatro Municipal, Rio de Janeiro, Brasil",
    // "Fundação Biblioteca Nascional, Rio de Janeiro, Brasil",
]

const uriPipe = (add) =>{
    const a = addresses.reduce((t, str)=>{
        let separator = t == ''? '' : '|'
        return t + separator + str
    }, '')

    return (baseUri+a+ending).replace(/ /g, "%20")
}


const html = (uri) => `
<div style="width: 100%">
    <iframe 
        width="100%" 
        height="800" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="${uri}">
    </iframe>
</div>
`

export default function Map(props){
    const places = uriPipe(addresses)
    
    return (
        <View style={{ flex: 1 }}>
        <WebView
            source={{ html: html(places) }}
            style={{ marginTop: 20 }}
        />
        </View>
    );
};
