import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  splash: {
    flex: 1,
    marginTop: '35%',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  splashText: {
    fontSize: 25,
    marginTop: 25,
    fontWeight: '200',
    fontFamily: 'Roboto',
    color: 'rgba(255,255,255,0.9)'
  },
  loadingIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: '55%'
  },
  child:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
    padding: 5,
  },
  userId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  }
})