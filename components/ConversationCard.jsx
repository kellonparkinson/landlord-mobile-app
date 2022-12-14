import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

const ConversationCard = ({ data, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
        <View style={styles.conversationCard}>
            <View style={styles.contactIcon}>
                <Image
                    source={data.contactPhoto}
                    style={{width: '100%', height: '100%'}}
                />
            </View>
            <View>
                <Text style={styles.cardTitle}>
                    {data.firstName} {data.lastName}
                </Text>
                <Text style={styles.cardText}>
                    {data.message}
                </Text>
            </View>
        </View>
    </TouchableHighlight>
  )
}

export default ConversationCard

const styles = StyleSheet.create({
    conversationCard: {
        padding: 20,
        backgroundColor: '#3e3e3e',
        marginTop: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    cardTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
    },
    cardText: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: 16,
        color: '#bfc0c0',
        width: 300,
    },
    contactIcon: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        marginVertical: 5,
        marginEnd: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})