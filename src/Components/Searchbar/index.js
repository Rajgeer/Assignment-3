import React from 'react';
import {Searchbar, Surface, useTheme} from 'react-native-paper';

const SearchComponent = props => {
  const theme = useTheme();
  const {getQuery = () => {}} = props;
  const [searchQuery, setSearchQuery] = React.useState();
  const onChangeSearch = query => setSearchQuery(query);
  const onPressIcon = () => {
    getQuery(searchQuery);
  };
  return (
    <Surface
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: theme?.colors.surface,
      }}
      elevation={0}>
      <Searchbar
        style={{
          elevation: 0,
          borderColor: theme?.colors.disabled,
          borderWidth: 1,
        }}
        theme={{
          roundness: 0,
        }}
        inputStyle={{
          margin: 0,
          padding: 0,
        }}
        onIconPress={onPressIcon}
        placeholder="Search..."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </Surface>
  );
};

export default SearchComponent;
