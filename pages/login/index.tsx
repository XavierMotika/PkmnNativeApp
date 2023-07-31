import React, { useState } from "react";
import {Formik} from "formik";
import * as yup from "yup";
import AuthenticationService from "services/Authentication";
import { Button, ImageBackground, Text, TextInput, View } from "react-native";
import styles from "./style";


const image = {uri: 'https://cdn.dribbble.com/users/1407587/screenshots/3014076/media/48ac35c2ae3f68e2d2f0a346f5d1f1de.gif'};

interface Props {

}


const Login = ({navigation} : any) => {
  const [error, setError] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(AuthenticationService.isAuthenticated);
  const validationSchema = yup.object().shape({
    login: yup
      .string()
      .required("obligatoire")
      .test("3len", "au moins 3 caractères", (val: string) => val.length >= 3),
    password: yup
      .string()
      .required("obligatoire")
      .test("3len", "au moins 3 caractères", (val: string) => val.length >= 3),
  });

  

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Formik  
      initialValues={{login: "" , password: ""}}
      validationSchema={validationSchema}
      onSubmit={(values) => {
       AuthenticationService.login(
        values.login,
        values.password
      ).then((ok)=>{
        setIsAuthenticated(ok);
        (setError(!ok));
      });
      isAuthenticated? navigation.navigate("MainPage") : navigation.navigate("Login")
    }
    
    }>
      {({ handleChange,handleSubmit, handleBlur, values }: any) => (
        
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} onChangeText={handleChange('login')} value={values.login} // error={formik.touched.login && Boolean(formik.errors.login) } helperText={formik.touched.login && formik.errors.login}
            onBlur={handleBlur('login')} placeholder="Entrer le nom d'utilisateur" />
            <TextInput style={styles.input} onChangeText={handleChange('password')} value={values.password} // error={formik.touched.login && Boolean(formik.errors.login) } helperText={formik.touched.login && formik.errors.login}
            onBlur={handleBlur('password')} placeholder="Entrer le mot de passe" secureTextEntry={true} />  
            <Button onPress={handleSubmit} title="Se connecter" />
            <Text >{error ? "connexion impossible" : ""}</Text>
          </View>     
      )}
      
      </Formik>
    </ImageBackground>   
  );
};

export default Login;
