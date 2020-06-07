import React, { useEffect, useState } from 'react';
import { Container, Spacer } from 'rnfui';
import { TextInput, HelperText } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { View, Image, StyleSheet ,Text} from 'react-native';
import AppButton from '../../Components/Shared/AppButton/Appbutton';
import scaler from '../../Utilities/scaler';



export default function EmployeeDetail({props,route,navigation}:any){
    const dispatch=useDispatch();
    const [getItem,setItem]:any=useState([])
    const onchange = (args: any) => args[0].nativeEvent.text
    const form=useForm({mode:'onChange',});

    const edit=()=>{
        let item=getItem
            let body=form.getValues();
            console.log(body);
            item['login']=body.login || getItem.login
            item['type']=body.type || getItem.type
            dispatch({type:"EDIT_EMPLOYEE",payload:[item.id,item]});
            navigation.goBack()
    }


    useEffect(()=>{
        const {item} =route.params;
        console.log(item.id,item.avatar_url)
        setItem(item)
    },[])
    return(
        <Container style={{padding:scaler(15)}}>
             <Spacer  size={100}/>
            <View style={{alignSelf:'center'}}>
            <Image style={{width:scaler(180),height:scaler(180)}}
            source={{uri:`${getItem.avatar_url}`}}
          />
            </View>
            <Spacer />
            <Text>Employee Name</Text>
         <View>
         <Controller as={<TextInput mode={'outlined'}
            style={Styles.inner}
            defaultValue={getItem.login}
            error={form.errors.FirstName ?true:false} />}
            control={form.control}
            onChange={onchange}
            name={'login'}
            rules={{required:{value:true,message:'First Name is Required'}}}
            />
           
            
        </View>
        <Spacer  size={20}/>
        <Text>Employee Type</Text>
        <View>
        <Controller as={<TextInput mode={'outlined'}
            style={Styles.inner}
            // label={'First Name'}
            // placeholder={'First Name'}
            defaultValue={getItem.type}
            error={form.errors.FirstName ?true:false} />}
            control={form.control}
            onChange={onchange}
            name={'type'}
            rules={{required:{value:true,message:'First Name is Required'}}}
            />
           
          
           
        </View>
        <Spacer size={50}/>
        <AppButton  onPress={()=>{edit()
        }} children={"Edit Employee"}/>
            <Spacer size={20}/>


            <AppButton  onPress={()=>{dispatch({type:"REMOVE_EMPLOYEE",payload:getItem.id});
        navigation.goBack()
        }} children={"Delete Employee"}/>
        </Container>
    )

}
const Styles =StyleSheet.create({
    inner:{
        backgroundColor:'white',
    }
})