import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { imageMap, logoStyles, styleToImageMap } from '../../utils/constants';

type Props = {
    selectedStyle: string;
    setSelectedStyle: (style: string) => void;
};

const LogoStyleSelector = ({ selectedStyle, setSelectedStyle }: Props) => {
    const renderStyleItem = ({ item }: { item: { id: string; label: string } }) => {
        const imageKey = styleToImageMap[item.id] || 'image1';

        return (
            <View>
                <TouchableOpacity
                    style={styles.styleItem}
                    onPress={() => setSelectedStyle(item.id)}
                >
                    <Image source={imageMap[imageKey]} style={styles.styleIcon} />
                </TouchableOpacity>
                <Text
                    style={[
                        styles.styleLabel,
                        selectedStyle === item.id && styles.selectedStyleLabel,
                    ]}
                >
                    {item.label}
                </Text>
            </View>
        );
    };

    return (
        <>
            <Text style={[styles.sectionLabel, styles.logoStyleLabel]}>Logo Styles</Text>
            <FlatList
                horizontal
                data={logoStyles}
                renderItem={renderStyleItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.styleList}
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
};

const styles = StyleSheet.create({
    styleItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        flexDirection: 'column',
    },
    styleIcon: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },

    styleLabel: {
        marginTop: 5,
        fontSize: 13,
        lineHeight: 18,
        fontFamily: 'Manrope-Regular',
        color: '#71717A',
        textAlign: 'center',
    },
    selectedStyleLabel: {
        color: '#FAFAFA',
        fontFamily: 'Manrope-Bold',
    },
    sectionLabel: {
        fontSize: 20,
        lineHeight: 25,
        color: '#FAFAFA',
        fontFamily: 'Manrope-ExtraBold',
    },
    logoStyleLabel: {
        marginTop: 20,
    },

    styleList: {
        marginVertical: 12,
    },

});

export default LogoStyleSelector;
