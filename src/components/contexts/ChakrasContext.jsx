import React, { createContext, useState, useContext } from 'react';

const chakrasData = {
    muladhara: {
        name: 'Muladhara',
        secondaryName: 'Root Chakra',
        description: 'El chakra raíz nos hace sentir seguros. Relacionado con la seguridad y supervivencia.',
        ejercicios: 'Meditación centrada en la conexión a tierra, yoga, y repetir afirmaciones positivas.'
    },
    svadhishthana: {
        name: 'Svadhishthana',
        secondaryName: 'Sacral Chakra',
        description: 'Vinculado con la creatividad y sexualidad. Está cerca del sacro.',
        ejercicios: 'Meditación centrada en el agua, danza, y expresión creativa.'
    },
    manipura: {
        name: 'Manipura',
        secondaryName: 'Solar Plexus Chakra',
        description: 'Relacionado con el poder personal y autoestima. Ubicado en el plexo solar.',
        ejercicios: 'Meditación centrada en el fuego y establecimiento de límites.'
    },
    anahata: {
        name: 'Anahata',
        secondaryName: 'Heart Chakra',
        description: 'Está en el centro del pecho, vinculado con el amor y compasión.',
        ejercicios: 'Meditación centrada en el aire, prácticas de amor y gratitud.'
    },
    vishuddha: {
        name: 'Vishuddha',
        secondaryName: 'Throat Chakra',
        description: 'Vinculado con la comunicación y expresión. Ubicado en la garganta.',
        ejercicios: 'Canto, hablar la verdad y prácticas de escucha.'
    },
    ajna: {
        name: 'Ajna',
        secondaryName: 'Third Eye Chakra',
        description: 'Relacionado con la intuición y percepción. Ubicado en el entrecejo.',
        ejercicios: 'Meditación centrada en la luz interior, prácticas de visualización.'
    },
    sahasrara: {
        name: 'Sahasrara',
        secondaryName: 'Crown Chakra',
        description: 'Ubicado en la corona de la cabeza. Vinculado con la espiritualidad y conexión divina.',
        ejercicios: 'Meditación centrada en el silencio y conexión con lo divino.'
    }
};


const ChakraContext = createContext();

export const ChakraProvider = ({ children }) => {
    const [chakra, setChakra] = useState(chakrasData.muladhara); // Default to root chakra
    

    return (
        <ChakraContext.Provider value={{ chakra, setChakra }}>
            {children}
        </ChakraContext.Provider>
    );
};

export const useChakra = () => {
    const context = useContext(ChakraContext);
    if (context === undefined) {
        throw new Error('useChakra must be used within a ChakraProvider');
    }
    return context;
};
