import { StyleSheet } from "react-native"
import { View, Text } from "react-native"

export default function PumpStatus({result}){
    console.log("res", result)
    return(
         <View style={[
                  styles.resultContainer,
                  result.pump_status === 'ON' ? styles.resultOn : styles.resultOff
                ]}>
                  <Text style={styles.resultTitle}>Pump Status</Text>
                  
                  <View style={styles.statusIndicator}>
                    <View style={[
                      styles.statusLight,
                      result.pump_status === 'ON' ? styles.lightOn : styles.lightOff
                    ]} />
                    <Text style={styles.statusText}>{result.pump_status}</Text>
                  </View>
                  
                  <Text style={styles.resultText}>{result.message}</Text>
                  <Text style={styles.resultDetail}>Activation Level: {(result.pump_activation_level * 100).toFixed(2)}%</Text>
                </View>
    )
}
const styles= StyleSheet.create({
resultContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
  },
  resultOn: {
    borderLeftColor: '#2ecc71',
  },
  resultOff: {
    borderLeftColor: '#e74c3c',
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  statusLight: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  lightOn: {
    backgroundColor: '#2ecc71',
  },
  lightOff: {
    backgroundColor: '#e74c3c',
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#34495e',
  },
  resultDetail: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
  },})