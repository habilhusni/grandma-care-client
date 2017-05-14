import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  splash: {
    flex: 1,
    marginTop: '15%',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  splashText: {
    fontSize: 25,
    marginTop: 15,
    color: 'rgba(152,152,152,0.7)'
  },
  loadingIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    color: '#292988'
  }
})