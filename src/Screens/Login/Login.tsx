
import React from 'react';
import {Container, Spacer, Body, Click} from 'rnfui';
import { View, StyleSheet, Alert ,Text, TextInput} from 'react-native';
import {useForm,Controller,} from 'react-hook-form'
import { HelperText, Button } from 'react-native-paper';
import UseLogin from './UseLogin';
import AppTheme from '../../Config/AppTheme';
import AppButton from '../../Components/Shared/AppButton/Appbutton';
import scaler from '../../Utilities/scaler';





export default function Login(props:any,navigation:any) {
    const{doLogin,onChange,form}=UseLogin();

    
    const {errors,control,}=form;
   
    
    return(
        <Container  fullScreen  >
            <Body style={Styles.outer}> 
           <Spacer size={300}/>
           <View>
               <Text style={{fontSize:30,fontWeight:'bold',color:AppTheme.color.primary,alignSelf:'center'}}>Login</Text>
           </View>
           <Spacer size={50}/>
           
           
            <Controller as={<TextInput mode={'outlined'}
            style={Styles.inner}
            label={'User Name'}
            placeholder={'User Name'}
            error={form.errors.FirstName ?true:false} />}
            control={form.control}
            onChange={onChange}
            name={'UserName'}
            rules={{required:{value:true,message:'UserName is Required'}}}
            />
            {form.errors.UserName && <HelperText style={{color:'red'}}>
        {
            (form.errors.UserName || {message:''}).message
        }</HelperText>}
       
           <Spacer size={20}/>
           <Controller
           as={
               <View style={Styles.inner}>
                   <TextInput
                   placeholder={'Password'}
                   secureTextEntry={true}
                
                   />
               </View>
           } 
           control={control}
           onChange={onChange}
           name='Password' 
           rules={{required:{value:true,message:'Password is required !'},minLength:{value:5,message:'Passward atlest be 5 character'}}}
           />
           {errors.Password && <HelperText style={{color:'red'}}>
               {(errors.Password || {message:''}).message}
               </HelperText>}
           <Spacer size={20}/>
          
           
          
           <Spacer size={20}/>
          
          <View>
              <AppButton onPress={form.handleSubmit(()=>{
              doLogin()
          })}  children={'Submit'} />
          </View>
          <Spacer size={50}/>
         
       
          </Body>
          
        </Container>
    )
}

const Styles =StyleSheet.create({
    outer:{
        padding:20,backgroundColor:'#f2f2f2', },
       

    inner:{
        backgroundColor:'white',
                   borderRadius:80,paddingLeft:50,paddingRight:80
    },
    button:{backgroundColor:AppTheme.color.secondary,width:150,height:45,borderRadius:25,

    }

})