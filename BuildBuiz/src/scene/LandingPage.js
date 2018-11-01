import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Button, Dimensions} from 'react-native'
import { singleScreenApplication } from '../styles/navigatorstyle'
import Icon from 'react-native-vector-icons/Ionicons'
import MapView  from 'react-native-maps'


class LandingPage extends Component {
    static navigatorStyle = singleScreenApplication;
    constructor(props) {
        super(props);
        this.state = {
            focusedLocation: {
                latitude: 37.7900352,
                longitude: -122.4013726,
                latitudeDelta: 0.0122,
                longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
            }
        }
    }

    pressAddProduct() {
        console.log('press clicked')
        this.props.navigator.push({screen:'BuildBuiz.AddProduct'});
    }
    pressContact() {
        this.props.navigator.push({screen: 'BuildBuiz.Contact'});
    }
    pressGallery() {
        this.props.navigator.push({screen: 'BuildBuiz.Gallery'});
    }
    pressCatalogue() {
        this.props.navigator.push({screen:'BuildBuiz.WelcomeScene'})
    }
    pressAboutUs() {
        this.props.navigator.push({screen:'BuildBuiz.AboutUs'})
    }
    pressBlog() {
        this.props.navigator.push({screen: 'BuildBuiz.Blog'})
    }
    
    render(){
          return(
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Text style={styles.inputSearch}> Website Builder </Text>
                </View>
                <View style={styles.MainContainer}>
                    <TextInput
                    placeholder="Search Card"
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}/>   
                </View>
              <ScrollView style={styles.list}>
                {/* <MapView 
                        initialRegion={this.state.focusedLocation}
                        style={styles.map}
                    /> */}
                <View style={styles.itemContainer}>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon} onPress={this.pressCatalogue.bind(this)}>
                                <Icon name="ios-list" color="#2542C7" size={50} />
                            </TouchableOpacity>
                            {/* <Text style={styles.itemText}>Catalogue</Text> */}
                        </View>
                        <Text style={styles.itemText}>Catalogue</Text>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon} onPress={this.pressAddProduct.bind(this)}>
                                <Icon name="ios-add" color="#2542C7" size={50} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.itemText}>Add Product</Text>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon} onPress={this.pressAboutUs.bind(this)}>
                                <Icon name="ios-people" color="#2542C7" size={50} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.itemText}>About Us</Text>
                    </View>

                </View>
                <View style={styles.itemContainer}>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon}>
                                <Icon name="ios-card" color="#2542C7" size={50} />
                            </TouchableOpacity>
                            {/* <Text style={styles.itemText}>Catalogue</Text> */}
                        </View>
                        <Text style={styles.itemText}>Payment</Text>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon} onPress={this.pressGallery.bind(this)}>
                                <Icon name="md-apps" color="#2542C7" size={50} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.itemText}>Gallery</Text>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon} onPress={this.pressContact.bind(this)}>
                                <Icon name="md-contact" color="#2542C7" size={50} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.itemText}>Contact</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon}>
                                <Icon name="logo-facebook" color="#2542C7" size={50} />
                            </TouchableOpacity>
                            {/* <Text style={styles.itemText}>Catalogue</Text> */}
                        </View>
                        <Text style={styles.itemText}>Facebook</Text>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon}>
                                <Icon name="logo-twitter" color="#2542C7" size={50} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.itemText}>Twitter</Text>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon}>
                                <Icon name="logo-instagram" color="#2542C7" size={50} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.itemText}>Instagram</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon}>
                                <Icon name="ios-calendar" color="#2542C7" size={50} />
                            </TouchableOpacity>
                            {/* <Text style={styles.itemText}>Catalogue</Text> */}
                        </View>
                        <Text style={styles.itemText}>Appointment</Text>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon}>
                                <Icon name="ios-videocam" color="#2542C7" size={50} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.itemText}>Video</Text>
                    </View>
                    <View>
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.icon} onPress={this.pressBlog.bind(this)}>
                                <Icon name="logo-wordpress" color="#2542C7" size={50} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.itemText}>Blog</Text>
                    </View>
                </View>
              </ScrollView>
            </View>
          ) 
        }
    }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        searchContainer :{
            height: '13%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'black',
        },
        inputSearch: {
          width: '70%',
          color: 'white',
          marginBottom: 2,
          fontSize: 20,
        },
        map: {
            width: '100%',
            height: 250
        },
        list: {

        },
        itemContainer: {
            height: 120,
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row'
        },
        item:{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: '#2542C7'
            
        },
        icon: {
            flex: 1,
            padding: 7,
            alignItems: 'center',
            justifyContent: 'center'
          },
          itemText: {
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 5,
              color: 'grey'
          },
          MainContainer :{
                height: '10%',
                justifyContent: 'center',
                margin: 10,
            },         
            
            TextInputStyleClass:{
                textAlign: 'center',
                height: 50,
                borderWidth: 2,
                borderColor: 'black',
                borderRadius: 20 ,
                backgroundColor : "#FFFFFF"
             
        }  
      })

  
export default LandingPage