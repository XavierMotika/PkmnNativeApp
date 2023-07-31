import React, { useState } from "react";
import {Formik} from "formik";
import * as yup from "yup";
import { Button, Image, Text, TextInput, View, FlatList, Modal, Pressable, Alert } from "react-native";
import {useEffect} from "react";
import styles from "./style";
import PokemonService from "services/pokemonService";
import Pokemon from "models/pokemon";
import ChipType from "components/ChipType";
import PokemonTypeService from "services/typeService";
import PokemonType from "models/pokemonType";
import PressableChipType from "components/PressableChip";


const Edit = ({route, navigation} : any) => {
    const {picture, id, name, hp, cp, types} = route.params;
    const [error, setError] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [alltypes,setTypes] = useState<PokemonType[]>();
    const [pokemonTypes,setPokemonTypes] = useState<PokemonType[]>();
    const [modalErrorMessage,setModalError] = useState<boolean>(false);
    useEffect(()=>{
        PokemonTypeService.getTypes().then((types)=> setTypes(types));
    },[])

    const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required("obligatoire")
        .test("2len", "au moins 2 caractères", (val: string) => val.length >= 2),
    hp: yup
        .number()
        .required("obligatoire")
        .min(0, "au minimum 0")
        .max(4000, "au maximum 4000"),
    cp: yup
        .number()
        .required("obligatoire")
        .min(0, "au minimum 0")
        .max(4000, "au maximum 4000"),
    types: yup
        .array()
        .test(
          "123",
          "entre 1 et 3",
          (val) => val !== undefined && val.length >= 1 && val.length <= 3
        ) 
    });

    function addZeroes (id : number) {
        if (id < 10) {
            return "000"
        } else if (id < 100) {
            return "00"
        } else return "0"
    }

  return (
    
      <Formik  
      initialValues={{name:name ,hp:hp, cp:cp }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        PokemonService.save(new Pokemon (
            id,
            values.hp,
            values.cp,
            values.name, 
            
        ))
    }
    
    }>
      {({ handleChange,handleSubmit, handleBlur, values}: any) => (
        <View style={styles.container}> 
            <Modal animationType="slide" transparent={true} visible={modalVisible}
            onRequestClose={() => {Alert.alert('Modal has been closed.'); setModalVisible(!modalVisible); }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <FlatList style={styles.list} data={alltypes} numColumns={2} columnWrapperStyle={{justifyContent : "space-around"}}
                        renderItem={(type) => <PressableChipType typeId={type.item.id} pokemonTypes={types} setPokemonTypes={setPokemonTypes} error={setModalError}/>}/>
                        {modalErrorMessage? 
                        
                        <Text style={{flex: 1, fontSize: 20, color:"#FF0000", }} numberOfLines={1}> Déjà trois types sélectionnés ! </Text> 
                        
                        : null}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Valider les types</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        <View style={styles.top}>
            <View style={{flexDirection:"row", paddingHorizontal:20, paddingVertical:10, justifyContent:"space-between"}}>
                <Text style={styles.title}>
                    {"Numéro #"+addZeroes(id)+id+" : "}
                </Text>
                <TextInput style={styles.title} onChangeText={handleChange('name')} value={values.name} // error={formik.touched.login && Boolean(formik.errors.login) } helperText={formik.touched.login && formik.errors.login}
                onBlur={handleBlur('name')} />
            </View>
            <Image source={{uri : picture}} style={styles.image}/>
            <FlatList style={styles.list} data={types} numColumns={2} columnWrapperStyle={{justifyContent : "space-around"}}
            renderItem={(type) => <ChipType typeId={type.item}/>}/>
            <View style={{flexDirection:"row", paddingHorizontal:20, paddingVertical:10}}>
                <Text style={styles.dataTitle}>
                    Points de vie : 
                </Text>
                <View style={styles.data}>
                    <TextInput style={{alignSelf: "center",fontSize: 20,  maxHeight: 30, }} onChangeText={handleChange('hp')} value={(values.hp).toString()} // error={formik.touched.login && Boolean(formik.errors.login) } helperText={formik.touched.login && formik.errors.login}
                    onBlur={handleBlur('hp') } inputMode={"numeric"}/> 
                </View>
            </View>
            <View style={{flexDirection:"row", paddingHorizontal:20, paddingVertical:10}}>
                <Text style={styles.dataTitle}>
                    Puissance de combat :
                </Text>
                <View style={styles.data}>
                    <TextInput style={{alignSelf: "center",fontSize: 20,  maxHeight: 30, }} onChangeText={handleChange('cp')} value={(values.cp).toString()} // error={formik.touched.login && Boolean(formik.errors.login) } helperText={formik.touched.login && formik.errors.login}
                    onBlur={handleBlur('cp')} inputMode={"numeric"}/> 
                </View>
            </View>
            
        </View>
        <View style={styles.bottom}>
            <Button onPress={()=>setModalVisible(true)} color="#DF0101" title="Modifier les types" />
            <Button onPress={handleSubmit} color="#DF0101" title="Enregistrer" />
        </View>
    </View>
   
      )}
      
      </Formik>
    
  );
};

export default Edit;