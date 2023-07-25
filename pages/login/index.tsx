import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import AuthenticationService from "services/Authentication";
import { Button, Text, TextInput, View } from "react-native";
import styles from "./style";

interface Props {
  setIsAuthenticated: Function;
}

const Login = ({ setIsAuthenticated }: Props) => {
  const [error, setError] = useState<boolean>(false);

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
      <Formik 
      
      initialValues={{login: "" , password: ""}}
      validationSchema={validationSchema}
      onSubmit={ (values) => {
       AuthenticationService.login(
        values.login,
        values.password
      ).then((ok)=>{
        setIsAuthenticated(ok);
        setError(!ok);
      });
    }}>
      {({ handleChange, handleBlur, handleSubmit, values } : any) => (
        <View
        style={styles.container}>
        <TextInput style={styles.input} onChangeText={handleChange('login')} value={values.login} 
        onBlur={handleBlur('login')} placeholder="Entrer le nom d'utilisateur" // error={formik.touched.login && Boolean(formik.errors.login) } helperText={formik.touched.login && formik.errors.login}
        />
        <TextInput style={styles.input} onChangeText={handleChange('password')} value={values.password} 
        onBlur={handleBlur('password')} placeholder="Entrer le mot de passe" secureTextEntry={true} // error={formik.touched.login && Boolean(formik.errors.login) } helperText={formik.touched.login && formik.errors.login}
        />
        <Button onPress={handleSubmit} title="Submit" />
        <Text>{error ? "connexion impossible" : ""}</Text>
        </View>
      )}
      </Formik>
  );
};

export default Login;
