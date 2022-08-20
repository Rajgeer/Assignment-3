import {View, Appearance, FlatList} from 'react-native';
import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
import {Colors, useTheme, Text, Appbar} from 'react-native-paper';
import {requestApi} from '../utils/helper';
import {styles} from '../Styles/NativeStyle';
import SearchbarComponent from '../Components/Searchbar';
import LoaderComponent from '../Components/Loader';
import AccordionListComponent from '../Components/Accordion';
import { Context } from '../Context';
export default function FoodList({navigation}) {
  const theme = useTheme();
  const {approved} = useContext(Context);
  const [colorMode, setColorMode] = useState(Appearance.getColorScheme());
  const [searchText, setSearchText] = useState();
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState({
    isLoading: false,
    isError: false,
    result: [],
  });
  useEffect(() => {
    Appearance.addChangeListener(schema => setColorMode(schema.colorScheme));
    requestApi(
      {
        method: 'get',
        url: 'https://api.jsonbin.io/v3/b/60e7f4ebf72d2b70bbac2970',
        headers: {
          'Content-Type': 'application/json',
        },
      },
      () => {
        setData(prev => {
          return {...prev, isLoading: true};
        });
      },
      (response, metadata) => {
        setData(prev => {
          return {...prev, isLoading: false, result: response.data};
        });
      },
      err => {
        console.log({err});
        setData(prev => {
          return {...prev, isLoading: false, isError: true};
        });
      },
    );
  }, []);

  useEffect(() => {
    const lowercasedFilter = searchText?.toLowerCase();
    if (lowercasedFilter !== undefined) {
      let apidata = data?.result;
      if (apidata?.length > 0) {
        apidata = apidata?.filter(item => {
          return Object.keys(item).some(key =>
            String(item[key])?.toLowerCase().includes(lowercasedFilter),
          );
        });
      }
      setFilterData(apidata);
    }
  }, [searchText]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Food List',
      headerLeft: () => (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ),
      headerRight: () => <Appbar.Action icon="comment" />,
    });
  }, [navigation]);

  return (
    <View
      style={[
        styles.container,
        {height: '100%', backgroundColor: theme?.colors.surface},
      ]}>
      <SearchbarComponent
        getQuery={text => {
          setSearchText(text);
        }}
      />
      {data.isLoading && <LoaderComponent />}
      {/* <Text>FoodList</Text> */}
      <FlatList
        data={filterData?.length > 0 ? filterData : data.result}
        renderItem={({item}) => <AccordionListComponent item={item} />}
      />
    </View>
  );
}
