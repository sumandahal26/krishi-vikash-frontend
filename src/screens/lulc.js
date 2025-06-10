import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const lulcData = {
  karimganj: [
    {
      className: 'Water Body',
      pixel1988: 44219,
      pixel2024: 15177,
      area1988: 39.8,
      percent1988: '27.64%',
      area2024: 13.66,
      percent2024: '9.49%',
      changeSqKm: '-26.14',
      changePercent: '-18.15%',
    },
    {
      className: 'Built-up',
      pixel1988: 46569,
      pixel2024: 56262,
      area1988: 41.91,
      percent1988: '29.10%',
      area2024: 50.64,
      percent2024: '35.17%',
      changeSqKm: '+8.73',
      changePercent: '+6.06%',
    },
    {
      className: 'Vegetation',
      pixel1988: 69212,
      pixel2024: 88561,
      area1988: 62.29,
      percent1988: '43.26%',
      area2024: 79.7,
      percent2024: '55.35%',
      changeSqKm: '+17.41',
      changePercent: '+12.09%',
    },
  ]
};

const lulcImages = {
  karimganj: [
    { id: 1, before: require('../../assets/images/cluster-1988.png'), after: require('../../assets/images/cluster-2024.png'), text:"Clustered map of 1988 and 2024" },
    { id: 2, before: require('../../assets/images/logistic-1988.png'), after: require('../../assets/images/logistic-2024.png'), text:"Classification using logistic regression" },
    { id: 3, before: require('../../assets/images/neurel-1988.png'), after: require('../../assets/images/nurel-2024.png'), text:"Classification using Proposed Neural Network of 1988 and 2024" },
    { id: 4, before: require('../../assets/images/svm-1988.png'), after: require('../../assets/images/svm-2024.png'), text:"Classification using SVM Linear of 1988 and 2024" },
    { id: 5, before: require('../../assets/images/svm-r-1988.png'), after: require('../../assets/images/svm-r-2024.png'), text:"Classification using SVM with RBF of 1988 and 2024" },
  ],
  silchar: [
    { id: 1, before: require('../../assets/images/clustering-1998-s.png'), after: require('../../assets/images/cluster-2024-s.png'), text:"Clustered map of 1988 and 2024" },
    { id: 2, before: require('../../assets/images/map.png'), after: require('../../assets/images/map.png'), text:"Silchar map comparison" },
    { id: 1, before: require('../../assets/images/svm-1988-sil.png'), after: require('../../assets/images/svm-2024-s.png'), text:"Classification using SVM Linear of 1988 and 2024" },
    { id: 2, before: require('../../assets/images/logistic.png'), after: require('../../assets/images/logistic-2024-s.png'), text:"Classification using logistic regression" },
    { id: 1, before: require('../../assets/images/nn-1988-s.png'), after: require('../../assets/images/NN-2024-s.png'), text:"Classification using Proposed Neural Network of 1988 and 2024" },
    { id: 2, before: require('../../assets/images/svm-rbf-2024-s.png'), after: require('../../assets/images/svm-rbf-2024-s.png'), text:"Classification using SVM with RBF of 1988 and 2024" },
  ],
};

const LULCScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState('karimganj');

  const data = lulcData[selectedLocation];
  const images = lulcImages[selectedLocation];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>LULC Data Comparison</Text>

      <Picker
        selectedValue={selectedLocation}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedLocation(itemValue)}
      >
        <Picker.Item label="Karimganj" value="karimganj" />
        <Picker.Item label="Silchar" value="silchar" />
      </Picker>

      <ScrollView horizontal style={styles.tableContainer}>
        <View>
         {selectedLocation==="karimganj"&& <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.cell}>Class</Text>
            <Text style={styles.cell}>1988 Pixels</Text>
            <Text style={styles.cell}>2024 Pixels</Text>
            <Text style={styles.cell}>1988 Area</Text>
            <Text style={styles.cell}>1988 (%)</Text>
            <Text style={styles.cell}>2024 Area</Text>
            <Text style={styles.cell}>2024 (%)</Text>
            <Text style={styles.cell}>Change (km²)</Text>
            <Text style={styles.cell}>Change (%)</Text>
          </View>}

          {selectedLocation==='karimganj'&&data?.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cell}>{item.className}</Text>
              <Text style={styles.cell}>{item.pixel1988}</Text>
              <Text style={styles.cell}>{item.pixel2024}</Text>
              <Text style={styles.cell}>{item.area1988}</Text>
              <Text style={styles.cell}>{item.percent1988}</Text>
              <Text style={styles.cell}>{item.area2024}</Text>
              <Text style={styles.cell}>{item.percent2024}</Text>
              <Text style={styles.cell}>{item.changeSqKm}</Text>
              <Text style={styles.cell}>{item.changePercent}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Text style={styles.subHeading}>Image Comparison</Text>
      {images.map((img, index) => (
        <View key={img.id} style={styles.imageContainer}>
          <View style={styles.imageRow}>
            <Image source={img.before} style={styles.image} />
            <Image source={img.after} style={styles.image} />
          </View>
          <Text style={styles.imageText}>{img.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginVertical: 10,
  },
  tableContainer: {
    marginVertical: 10,
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 6,
  },
  cell: {
    width: 100,
    paddingHorizontal: 4,
    fontSize: 12,
  },
  subHeading: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
  imageContainer: {
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  image: {
    width: '48%',
    height: 150,
    borderRadius: 8,
  },
  imageText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
  },
});

export default LULCScreen;