import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  inside: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingLeft: 20,
    marginTop: 10,
    fontFamily: 'Arial',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    flex: 1,
    maxHeight: '6%',
    maxWidth: '100%',
  },
  btn: {
    backgroundColor: '#8DB',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    maxWidth: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  btntext: {
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 5,
  },
  profilecontainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#bec',
    borderRadius: 10,
    padding: 10,
  },
  usercontainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#bec',
    borderRadius: 10,
    padding: 10,
  },
  centercontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#bec',
    borderRadius: 10,
    padding: 10,
  },
  profiletxt: {
    fontSize: 20,
    padding: 5, 
    fontFamily: 'Arial',
  },
  nametxt: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,       
    fontFamily: 'Arial',
    color: '#6aac9c'  
  },
  developerContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#bec',
    borderRadius: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerheader: {
    flexDirection: 'row',
    marginLeft: 10, 
    marginVertical: 5,
  },
  drawertitle: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  drawercaption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#8bb',
  },  
  drawerMainTitle: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  usericon: {
    flex: 1,
    borderBottomColor: '#8bbeb2',
    marginBottom: 10,
    borderBottomWidth: 1,
    flexDirection: 'row', 
    justifyContent: 'flex-start',  
    alignItems: 'center',
    padding: 5,      
  },
  icon: {
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row', 
    justifyContent: 'flex-start',  
    alignItems: 'center',
    padding: 5,      
  },
  icontxt: {        
    fontSize: 21,
    paddingLeft: 15,            
    fontFamily: 'Arial',   
    color: '#8bbeb2' 
  },
  userbottom: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    flex: 1
  },
  usertxt: { 
    fontSize: 20,  
    paddingLeft: 5, 
    fontFamily: 'Arial' 
  }, 
  img: {   
    margin: 12,  
    height: 150, 
    width: 150,
    borderRadius: 150/2  
  } 
});
