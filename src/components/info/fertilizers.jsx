import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const FertilizerSources = () => {
  const fertilizerSources = [
    {
      id: 1,
      name: 'Organic Compost',
      description: 'Decomposed organic matter like food scraps, yard waste, and manure. Rich in nutrients and improves soil structure.',
      image: 'https://cdn.pixabay.com/photo/2017/04/20/20/56/compost-2242525_960_720.jpg',
      benefits: ['Improves soil health', 'Slow-release nutrients', 'Eco-friendly']
    },
    {
      id: 2,
      name: 'Animal Manure',
      description: 'Waste from livestock such as cows, chickens, and horses. Must be properly composted before use.',
      image: 'https://cdn.pixabay.com/photo/2017/09/29/13/41/manure-2799895_960_720.jpg',
      benefits: ['High in nitrogen', 'Adds organic matter', 'Improves water retention']
    },
    {
      id: 3,
      name: 'Green Manure',
      description: 'Plants grown specifically to be plowed back into the soil to improve fertility.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Green_manure_crops.jpg',
      benefits: ['Prevents soil erosion', 'Fixes nitrogen', 'Suppresses weeds']
    },
    {
      id: 4,
      name: 'Biofertilizers',
      description: 'Microorganisms that enhance soil fertility by fixing atmospheric nitrogen or solubilizing phosphorus.',
      image: 'https://www.researchgate.net/publication/328474163/figure/fig1/AS:682518183284736@1539878758075/Biofertilizer-application.png',
      benefits: ['Eco-friendly', 'Improves soil health', 'Cost-effective']
    },
    {
      id: 5,
      name: 'Mineral Fertilizers',
      description: 'Inorganic compounds containing essential nutrients like nitrogen, phosphorus, and potassium.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Nitrogen_fertilizer.jpg',
      benefits: ['Fast-acting', 'Precise nutrient content', 'Easy to apply']
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Fertilizer Sources</Text>
      <Text style={styles.subheader}>Natural and synthetic options for plant nutrition</Text>

      {fertilizerSources.map(source => (
        <View key={source.id} style={styles.card}>
          <Text style={styles.title}>{source.name}</Text>
          <Image source={{ uri: source.image }} style={styles.image} />
          <Text style={styles.description}>{source.description}</Text>
          <View style={styles.benefitsContainer}>
            <Text style={styles.benefitsTitle}>Key Benefits:</Text>
            {source.benefits.map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 5,
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1b5e20',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    marginBottom: 10,
  },
  benefitsContainer: {
    backgroundColor: '#e8f5e9',
    padding: 12,
    borderRadius: 8,
  },
  benefitsTitle: {
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 5,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  bullet: {
    marginRight: 5,
    color: '#2e7d32',
  },
  benefitText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
});

export default FertilizerSources;
