import React from 'react';
import { Container, Spacer, Body } from 'rnfui';
import {Controller,useForm} from 'react-hook-form'
import { View ,Text, StyleSheet} from 'react-native';
import { TextInput, HelperText, Button, DefaultTheme } from 'react-native-paper';
import { ThemeConsumer } from 'rnfui/compiled/dist/Themes/ThemeContext';
import AppTheme from '../../Config/AppTheme';
import AppButton from '../../Components/Shared/AppButton/Appbutton';
import {  useDispatch } from 'react-redux';



export default function AddEmployee(props:any){

    
    const dispatch=useDispatch()

    const doLogin =()=>{
        let body=form.getValues();
        let id=new Date().valueOf()
        body['id']=id
        dispatch({type:'ADD_EMPLOYEE',payload:[body.id,body]})
        props.navigation.goBack()
        
    }
 
    const onchange = (args: any) => args[0].nativeEvent.text
 
    


    const form=useForm({mode:'onChange'});
    return(<Container >
        <Body style={{padding:20}}>
        <Spacer size={50}/>
        <View>
            <Text style={{fontWeight:'bold',fontSize:25,color:'blue'}}>Add Employee</Text>
        </View>
        <Spacer  size={30}/>
        {/* <View>
            <Controller as={<TextInput mode={'outlined'}
            style={Styles.inner}
            label={'Url'}
            placeholder={'Url'}
            error={form.errors.FirstName ?true:false} />}
            control={form.control}
            onChange={onchange}
            name={'avatar_url'}
            rules={{required:{value:true,message:'First Name is Required'}}}
            />
            {form.errors.EmplopeeName && <HelperText style={{color:'red'}}>
        {
            (form.errors.EmplopeeName || {message:''}).message
        }</HelperText>}
        </View> */}
         <View>
            <Controller as={<TextInput mode={'outlined'}
            style={Styles.inner}
            label={'Employee Name'}
            placeholder={'Employee Name'}
            error={form.errors.FirstName ?true:false} />}
            control={form.control}
            onChange={onchange}
            name={'login'}
            rules={{required:{value:true,message:'First Name is Required'}}}
            />
            {form.errors.EmplopeeName && <HelperText style={{color:'red'}}>
        {
            (form.errors.EmplopeeName || {message:''}).message
        }</HelperText>}
        </View>
        <Spacer  size={20}/>
        <View>
            <Controller as={<TextInput mode={'outlined'}
            style={Styles.inner}
            label={'Employee Type'}
            placeholder={'Employee type'}
            error={form.errors.LastName ?true:false} />}
            control={form.control}
            onChange={onchange}
            name={'type'}
            rules={{required:{value:true,message:'Last Name is Required'},}}
            />
            {form.errors.LastName && <HelperText style={{color:'red'}}>
        {
            (form.errors.LastName || {message:''}).message
        }</HelperText>}
        </View>
        <Spacer  size={20}/>
        
        <Spacer  size={20}/>
        <View style={{alignSelf:'center'}}>
            <AppButton onPress={form.handleSubmit(()=>{doLogin()})} children={'Submit'} />
           
        </View>

        </Body>
    </Container>)

}
const Styles =StyleSheet.create({
    inner:{
        backgroundColor:'white',
    }
})