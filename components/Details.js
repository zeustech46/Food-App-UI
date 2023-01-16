/* eslint-disable no-undef */
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
// import popularData from '../assets/data/popularData';

export default Details = ({route, navigation}) => {
  const {item} = route.params;

  const renderIngredientsItem = ({item}) => {
    return (
      <View
        style={[
          styles.ingredientsItemWrapper,
          {
            marginLeft: item.id === '1' ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.ingredientsImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather
                  name="chevron-left"
                  size={12}
                  color={colors.textDark}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <MaterialCommunityIcons
                name="star"
                size={12}
                color={colors.white}
              />
            </View>
          </View>
        </SafeAreaView>

        {/* Title */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>

        {/* Pizza Info */}
        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Size</Text>
              <Text style={styles.infoItemText}>
                {item.sizeName} {item.sizeNumber}"
              </Text>
            </View>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Crust</Text>
              <Text style={styles.infoItemText}>{item.crust}</Text>
            </View>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Delivery in</Text>
              <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
            </View>
          </View>
          <View>
            <Image source={item.image} style={styles.itemImage} />
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <View style={styles.ingredientsListWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={renderIngredientsItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Button Order */}
        <TouchableOpacity onPress={() => alert('You Order Has Been Placed!')}>
          <View style={styles.buttonOrderWrapper}>
            <Text style={styles.buttonOrderTitle}> Place an order ></Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '60%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: colors.price,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 5,
  },
  infoItemText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.textDark,
  },
  itemImage: {
    marginLeft: 24,
    resizeMode: 'contain',
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientsItemWrapper: {
    backgroundColor: colors.white,
    marginRight: 15,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientsImage: {
    resizeMode: 'contain',
  },
  buttonOrderWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 50,
  },
  buttonOrderTitle: {
    fontFamily: 'Montserrat-Bold',
    marginVertical: 20,
  },
});
