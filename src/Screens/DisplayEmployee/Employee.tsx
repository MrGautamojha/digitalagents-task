import React, {useEffect} from 'react';
import {Container, Click, Spacer, Body} from 'rnfui';
const {height, width} = Dimensions.get('screen');
import {
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  View,
  Image,
  Alert,
} from 'react-native';
import {getDataAxios} from '../../FetchServices/FetchServices';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import AppButton from '../../Components/Shared/AppButton/Appbutton';
import scaler from '../../Utilities/scaler';
import {Searchbar} from 'react-native-paper';

export default function Employee(props: any) {
  const [state, setState] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);
  const {employee} = useSelector((state: any) => state);

  const dispatch = useDispatch();

  const user: any = useSelector((state) => state.tempemployee);
  let tempData = Object.values(user);

  const checkdata = async () => {
    const data = await getDataAxios('https://api.github.com/users');
    AsyncStorage.setItem('EMPLOYEE', JSON.stringify(data));

    data.map((item: any) => {
      dispatch({type: 'ADD_EMPLOYEE', payload: [item.id, item]});
    });
    setState(data);
  };
  useEffect(() => {
    checkdata();
  }, [employee]);

  function Item({item, props}: any) {
    return (
      <Click
        onPress={() => {
          props.navigation.navigate('EmployeeDetail', {item: item});
        }}>
        <View style={styles.item}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{}}>
              <Text style={styles.title}>{item.login}</Text>
              <Text>{item.organizationname}</Text>
            </View>
          </View>
          <View style={{marginTop: '3%'}}>
            {/* <Text>{item.internlocations}</Text> */}
          </View>
        </View>
      </Click>
    );
  }
  const onSearch = (text: any) => {
    console.log('called');
    dispatch({type: 'SEARCH', payload: [text]});
  };

  // console.log('.....................', tempData);
  return (
    <Container>
      <Body>
        <Spacer size={20} />
        <Text>{refresh}</Text>
        <View style={{paddingLeft: scaler(20), paddingRight: scaler(20)}}>
          <Searchbar
            placeholder="Search"
            onChangeText={(text) => {
              onSearch(text);
            }}
          />
        </View>
        <View style={{padding: scaler(50)}}>
          <AppButton
            onPress={() => {
              props.navigation.navigate('AddEmployee');
            }}
            children={'Add Employee'}
          />
        </View>
        <Spacer size={20} />
        <FlatList
          data={tempData}
          renderItem={({item}) => <Item item={item} props={props} />}
          // keyExtractor={item => item}
          // numColumns={4}
        />
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    padding: 10,
  },
  item: {
    borderColor: '#d1ccc0',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    width: width * 0.92,
    height: 'auto',
    borderWidth: 1,
    elevation: 3,
  },
  imageStyle: {
    borderRadius: 10,
    width: 80,
    height: 75,
    marginBottom: 2,
    justifyContent: 'space-evenly',
  },
  loginContainer: {
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#eb3b5a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#ecf0f1',
    // position:"absolute",
    alignSelf: 'center',
    borderRadius: 15,
  },
  headStyle: {
    marginBottom: 5,
    flexDirection: 'row',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#2991B8',
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 22,
  },
  title3: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 22,
    color: '#2991B8',
  },
});
