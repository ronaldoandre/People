import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet
} from 'react-native';
import Line from '../components/Line';


export default class PeopleDatailPage extends React.Component{
    render(){
		const { route } = this.props;

		const people = route.params.people;
        return(
 			<View style={styles.container}>
  				<Image
					source={{ uri: people.picture.large }}
					style={styles.avatar}/>  
				<View style={styles.detailContainer}>
					<Line label="Email:" content={people.email} />
					<Line label="Cidade:" content={people.location.city} />
					<Line label="Estado:" content={people.location.state} />
					<Line label="Tel:" content={people.phone} />
					<Line label="Cel:" content={people.cell} />
					<Line label="Pais:" content={people.nat} />
				</View>
			</View> 
        )
    }
} 

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	avatar: {
		aspectRatio: 1
	},
	detailContainer: {
		backgroundColor: '#e2f9ff',
		marginTop: 20,
		elevation: 1
	},
});