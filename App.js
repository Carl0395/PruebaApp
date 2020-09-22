import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from 'react-native';

import LottieView from 'lottie-react-native';

class App extends Component {

  state = {
    primero: true,
  }

  componentDidMount() {
    BackHandler.addEventListener('back', () => {
      this.setState({primero: true});
      return true
    })
  }

  change = () => {
    this.setState({
      primero: !this.state.primero
    })
  }


  render() {

    
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar backgroundColor={'#000'} barStyle="light-content" />


        {this.state.primero &&
        <PrimerComponente change={this.change} />}


        {!this.state.primero &&
        <SegundoComponente />}




      </SafeAreaView>
    );
  }
}
export default App;

class SegundoComponente extends Component {

  getTimeLabel = () => {
    const date = new Date();

    const hour = date.getHours();
    let hourMeridiem = hour > 12 ? hour - 12 : hour;
    hourMeridiem = hourMeridiem == 0 ? 12 : hourMeridiem;
    hourMeridiem = hourMeridiem < 10 ? `0${hourMeridiem}` : hourMeridiem;

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = date.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let days = date.getDate();
    days = days < 10 ? `0${days}` : days;

    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    let year = `${date.getFullYear()}`.substring(2, 4);


    let label = `Time ${hourMeridiem}:${minutes}.${seconds} Date: ${days}/${month}/${year}`

    return label
  }

  render() {
    return(
      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <View style={{marginLeft: 20}}>
            <View style={{backgroundColor: 'red', width: 40, height: 5.5, marginBottom: 2}} />
            <View style={{backgroundColor: 'red', width: 40, height: 5.5, marginBottom: 2}} />
            <View style={{backgroundColor: 'red', width: 40, height: 5.5, marginBottom: 2}} />
          </View>
          <View style={{alignItems: 'center', marginLeft: 10}}>
            <Text style={{fontSize: 8, color: 'white'}}>Seguridad</Text>
            <View style={{backgroundColor: 'red', marginBottom: 0, height: 22, width: 22, borderRadius: 22/2, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('./assets/user.png')} style={{width: 13, height: 13}} resizeMode="contain" />
            </View>
          </View>
          <View style={{flex: 1, height: 20, flexDirection: 'row', borderColor: 'red', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 40}}>
            <Text style={{fontSize: 10, flex: 1, color: 'white', textAlign: 'center'}}>Busqueda</Text>
            <View style={{ position: 'absolute', top: 2.5, right: 5, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'red', width: 12, height: 12, borderRadius: 12/2}} >
              <View style={{backgroundColor: 'white', width: 7.5, height: 7.5, borderRadius: 7.5/2,}} />
            </View>
          </View>
          <Image source={require('./assets/logo.png')} style={{height: 18, width: 80}} resizeMode="contain" />
          <View style={{backgroundColor: 'red', height: 18, width: 43, borderRadius: 20, marginRight: 15}}>
            <Text style={{fontSize: 7, color: 'white', position: 'absolute', top: -11, left: 5}}>ON</Text>
            <Text style={{fontSize: 7, color: 'white', position: 'absolute', top: -11, right: 0}}>OFF</Text>
            <View style={{width: 18, height: 18, borderRadius: 18 / 2, marginLeft: 2.5, backgroundColor: 'white', borderWidth: 1,}} />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{color: 'red', flex: 1, marginLeft: 74, marginTop: 3, fontSize: 10, fontWeight: '500'}}>
            {this.getTimeLabel()}
          </Text>
          <Text
            style={{textDecorationLine: 'underline', color: 'white', flex: 1, marginLeft: 74, marginTop: 3, fontSize: 10, fontWeight: '500'}}>
            Deseas asistencia por VOZ
          </Text>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', marginTop: 70, marginHorizontal: 30, borderRadius: 40 }}>
          <View style={{position: 'absolute', right: -10, top: -30, borderWidth: 1, borderColor: 'white', borderRadius: 40, height: 30, width: 30, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./assets/cross.png')} style={{width: 16, height: 16, resizeMode: 'contain'}} />
          </View>
          <View style={{width: '100%', alignItems: 'center', backgroundColor: '#FFAB00', borderTopLeftRadius: 40, borderTopRightRadius: 40}}>
            <Image source={require('./assets/kori.png')} style={{width: 110, height: 50, resizeMode: 'contain'}} />
          </View>

          <Text style={{fontFamily: 'ProductSans-Black', fontSize: 28, marginTop: 20}}>Delivery & food</Text>
          <Text style={{fontFamily: 'ProductSans-Black', fontSize: 14, marginTop: 4}}>Schedule QR entry #19B Tower B101</Text>
          <Image source={require('./assets/qr_img.png')} style={{width: 170, height: 170,}} />
          <View style={{backgroundColor: '#FFAB00', height: 6, width: '100%'}} />

          <Text style={{fontFamily: 'ProductSans-Black', fontSize: 17, marginTop: 4, marginBottom: 10}}>N°3999-1 | 26/03/2020 | Hora: 08:22.51 pm</Text>
          <View style={{backgroundColor: '#FFAB00', width: '100%', alignItems: 'center', justifyContent: 'center'}} >
            <Text style={{fontFamily: 'ProductSans-Black', fontSize: 17, marginTop: 4, }}>NOMBRE DOMICILIARIO</Text>
          </View>
          
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
            <Image source={require('./assets/user2.png')} style={{width: 60, height: 70,}} />
            <View style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
              <Text style={{fontFamily: 'ProductSans-Regular', fontSize: 11, marginBottom: 2}}>1. Nombre del Delivery</Text>
              <Text style={{fontFamily: 'ProductSans-Black', }}>Eduardo Peña</Text>
            </View>
            <Image source={require('./assets/appetito.png')} style={{width: 70, height: 70, marginLeft: 8}} />
          </View>

          <View style={{backgroundColor: '#FFAB00', height: 12, width: '100%',}} />
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Image source={require('./assets/polloNegro.png')} style={{width: 60, height: 60}} />
            <View style={{width: 2, backgroundColor: '#000', marginHorizontal: 10,}} />
            <View>
              <Text style={{fontFamily: 'ProductSans-Regular', fontSize: 16,}}>Appetito24</Text>
              <Text style={{fontFamily: 'ProductSans-Black', fontSize: 12,}}>Restaurante el trapiche.</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#FFAB00', height: 12, width: '100%',}} />
          <View style={{flexDirection: 'row'}}>
            <View style={{ width: 90, height: 30, marginRight: 14, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginVertical: 24, backgroundColor: '#FFAB00'}}>
              <Text style={{fontFamily: 'ProductSans-Regular', fontSize: 13}}>
                Aceptar
              </Text>
            </View>
            <View style={{ width: 90, height: 30, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginVertical: 24, backgroundColor: '#FFAB00'}}>
              <Text style={{fontFamily: 'ProductSans-Regular', fontSize: 13}}>
                Imprimir
              </Text>
            </View>
          </View>

        </View>

      </View>
    )
  }
}


class PrimerComponente extends Component {

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    this.animation.play();
    setInterval(() => {
      if (this != null && this.animation != null) {
        this.animation.play();
      }
    }, 5000);
  }

  getTimeLabel = () => {
    const date = new Date();

    const hour = date.getHours();
    let hourMeridiem = hour > 12 ? hour - 12 : hour;
    hourMeridiem = hourMeridiem == 0 ? 12 : hourMeridiem;
    hourMeridiem = hourMeridiem < 10 ? `0${hourMeridiem}` : hourMeridiem;

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = date.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let days = date.getDate();
    days = days < 10 ? `0${days}` : days;

    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    let year = `${date.getFullYear()}`.substring(2, 4);


    let label = `Time ${hourMeridiem}:${minutes}.${seconds} Date: ${days}/${month}/${year}`

    return label
  }

  render() {
    return (
      <View style={{}}>
        <Text
          style={{color: 'red', position: 'absolute', top: 40, left: 20, fontSize: 10, fontWeight: '500'}}>
          {this.getTimeLabel()}
        </Text>
        <ScrollView contentContainerStyle={styles.container}>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('./assets/Animado.json')}
            loop={false}
            style={{width: 180, height: 180, marginBottom: 10}}
          />
          <Text style={styles.label}>Bienvenido</Text>
          <Text style={styles.label}>Sr(a) Juan Perez a la</Text>
          <Text style={styles.label}>seguridad del PH Luxor Tower</Text>
          <View style={{flexDirection: 'row', marginTop: 25}}>
            <Image 
              style={{width: 110, height: 110, marginRight: 5}}
              source={require('./assets/camera.png')} />
            <Image 
              style={{width: 55, height: 38}}
              source={require('./assets/bandera.png')} />
          </View>
          <Text style={styles.description}>Tome una fotografía de su rostro sin accesorios para que los habitantes lo conozcan y tengan conocimiento del personal de seguridad.</Text>
          <Text style={[styles.description, {textAlign: 'left', width: '100%', marginLeft: 20, marginTop: 20}]}>Ingrese el nombres completos</Text>

          <View style={{height: 2, backgroundColor: 'white', width: '100%', marginTop: 20}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <Text style={[styles.description, {textAlign: 'left', width: '100%', marginLeft: 10, marginTop: 5, fontFamily: 'ProductSans-Regular'}]}>Seleccione la empresa en delivery</Text>
              <Text style={[styles.description, {textAlign: 'left', width: '100%', marginLeft: 10, marginTop: 0, marginBottom: 5, lineHeight: 20, fontFamily: 'ProductSans-Regular', fontWeight: '300', fontSize: 19, color: '#CC0000'}]}>Appetito24</Text>
            </View>
            <Image source={require('./assets/pollo.png')} style={{width: 30, height: 30}} />
            <Image source={require('./assets/appetito.png')} style={{width: 30, height: 30, marginLeft: 24, marginRight: 40}} />
          </View>
          <View style={{height: 2, backgroundColor: 'white', width: '100%'}} />
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <View style={{flex: 1}}>
              <Text style={[styles.description, {textAlign: 'left', width: '100%', marginLeft: 10, marginTop: 5, fontFamily: 'ProductSans-Regular'}]}>Ingrese numero de apto haci donde se dirige</Text>
              <Text style={[styles.description, {textAlign: 'left', width: '100%', marginLeft: 10, marginTop: 0, marginBottom: 2, fontFamily: 'ProductSans-Regular', lineHeight: 23, fontWeight: '300', fontSize: 19, color: '#CC0000'}]}>Scheduled QR entry # 198 Tower B101</Text>
            </View>
          </View>
          <View style={{height: 2, backgroundColor: 'white', width: '100%'}} />

          <TouchableOpacity
            onPress={() => this.props.change()}
            style={{backgroundColor: '#FF3900', height: 40, width: 220, justifyContent: 'center', alignItems: 'center', marginTop: 50, borderRadius: 10}}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'ProductSans-Regular'}}>Guardar y enviar</Text>  
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
  label: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 21,
    fontFamily: 'ProductSans-Black'
  },
  description: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'ProductSans-Regular',
    width: 360,
    fontSize: 17,
    marginTop: 10
  }
});

