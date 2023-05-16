import * as Yup from "yup";

const validations = Yup.object().shape({
    tex: Yup.string().required('Text is a required field') //string ve zorunlu bir alan olduğunu belirledik
})

export default validations;


/**
 * JavaScript nesne şeması doğrulayıcısı ve nesne ayrıştırıcısıdır. 
 * Yup ile oluşturacağımız şema yardımıyla ilgili form alanlarının kontrolünü sağlayabiliriz.
 */