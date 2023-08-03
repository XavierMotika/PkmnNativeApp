import React, { useState } from "react";
import {ErrorMessage, Formik} from "formik";
import * as yup from "yup";
import AuthenticationService from "services/Authentication";
import { Button, ImageBackground, Text, TextInput, View } from "react-native";
import styles from "./style";


const image = {uri: 'https://cdn.dribbble.com/users/1407587/screenshots/3014076/media/48ac35c2ae3f68e2d2f0a346f5d1f1de.gif'};

interface Props {

}


const Login = ({navigation} : any) => {
  const [error, setError] = useState<boolean>(false);
  const validationSchema = yup.object().shape({
    login: yup
      .string()
      .required("Nom d'utilisateur requis")
      .test("3len", "au moins 3 caractères", (val: string) => val.length >= 3),
    password: yup
      .string()
      .required("Mot de passe requis")
      .test("3len", "au moins 3 caractères", (val: string) => val.length >= 3),
  });


  function checkForError(touched: any, errors: any, error: boolean): React.ReactNode {
    if (touched.login && Boolean(errors.login)) return (
      (touched.login && errors.login)  
    );
    if (touched.password && Boolean(errors.password)) return (
      (touched.password && errors.password)  
    );
    if (error) return (
      "Connexion impossible"  
    );
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Formik  
      initialValues={{login: "" , password: ""}}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setError(false);
       AuthenticationService.login(
        values.login,
        values.password
      ).then((ok)=>{ok? 
        navigation.navigate("MainPage") :
        setError(!ok)
      });
    }
    
    }>
      {({ handleChange,handleSubmit, handleBlur, values, touched, errors}: any) => (
        
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} onChangeText={handleChange('login')} value={values.login}  
            onBlur={handleBlur('login')} placeholder="Entrer le nom d'utilisateur" />
            <TextInput style={styles.input} onChangeText={handleChange('password')} value={values.password}
            onBlur={handleBlur('password')} placeholder="Entrer le mot de passe" secureTextEntry={true} />  
            <Button onPress={handleSubmit} title="Se connecter" />
            <Text numberOfLines={2} style={{backgroundColor:"#FA0000", color:"#FFFFFF"}}>{checkForError(touched,errors,error)}</Text>
          </View>     
      )}
      
      </Formik>
    </ImageBackground>   
  );
};

export default Login;
