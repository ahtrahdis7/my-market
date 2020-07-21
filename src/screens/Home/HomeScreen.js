import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image} from 'react-native';
import { Tile } from 'react-native-elements';

import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import { products } from '../../data/products';

const imagePath = "../../data/images/";
export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () =>
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
  });

  constructor(props) {
    super(props);
  }
  renderMenuItem = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' 
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" }} />
        {/* <Image style={styles.photo} source="1.jpg"/> */}
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <ScrollView>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={products.slice(0,18)}
          renderItem={this.renderMenuItem}
          numColumns={2}
          keyExtractor={item => item.filename.split(".")[0]}
        />
      </ScrollView>
    );
  }
}