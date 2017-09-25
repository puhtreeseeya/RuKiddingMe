import { StyleSheet } from 'react-native'; 


const styles = StyleSheet.create({
  heading: {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "600"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height:500
  }, 
  formContent: {
  	padding:22
  }

});

export default styles; 