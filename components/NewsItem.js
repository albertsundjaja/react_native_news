import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

// news item component which display the title, image and quick summary of the news
const NewsItem = props => {
    return (
        <View style={styles.cardContainer}>
            <Card elevation={3} onPress={props.onItemClickHandler.bind(this, props.item)}>
                <Card.Cover source={{uri: props.item.imageUrl}} />
                <Card.Content>
                    <Title>{props.item.title}</Title>
                    <Paragraph>{props.item.summary}</Paragraph>
                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
      padding: 10
    }
});

export default NewsItem;