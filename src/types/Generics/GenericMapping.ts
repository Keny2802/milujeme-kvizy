type GenericMappingVariantsType = string;

type GenericMappingType<T extends GenericMappingVariantsType> = { [ K in T ]: GenericMappingVariantsType };

type GenericMappingVariantType = {
    variant: GenericMappingVariantsType;
};

export type {
    GenericMappingVariantsType,
    GenericMappingType,
};

export default GenericMappingVariantType;