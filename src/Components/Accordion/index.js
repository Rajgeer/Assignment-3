import * as React from 'react';
import {List} from 'react-native-paper';
import {Image} from 'react-native';

const AccordionListComponent = props => {
  const {item} = props;
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section style={[{marginHorizontal: 20, marginVertical: 10}]}>
      <List.Accordion
        title={item?.title}
        // left={props => <Image source={item?.image} />}
        expanded={expanded}
        onPress={handlePress}>
        {item?.data?.map(elem => (
          <List.Item key={elem?.id} title={elem?.title} />
        ))}
      </List.Accordion>
    </List.Section>
  );
};

export default AccordionListComponent;
