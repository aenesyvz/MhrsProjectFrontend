export class ValidateSchema {

    errorMessageForGlobalRequired: Record<string, string> = {
        required: "Lütfen boş bırakmayın",
    }

    errorMessageForSelectGlobalRequired: Record<string, string> = {
        required: "Lütfen boş bırakmayın",
        min: "Lütfen seçim yapınız"
    }
    errorMessageForNatioanlityId: Record<string, string> = {
        required: "T.C. Kimlik No Zorunlu Alan",
        minlength: "11 Haneli"
    }

    errorMessageForFirstName: Record<string, string> = {
        required: "Ad Zorunlu Alan"
    }

    errorMessageForLastName: Record<string, string> = {
        required: "Soyad Zorunlu Alan"
    }

    errorMessageForGender: Record<string, string> = {
        required: "Cinsiyet Zorunlu Alan",
        min: "Lütfen cinsiyet seçiniz"
    }

    errorMessageForDateOfBirth: Record<string, string> = {
        required: "Doğum Tarihi Zorunlu Alan"
    }

    errorMessageForEmail: Record<string, string> = {
        required: "Lazım",
        email: "Email gir lan",
    }

    errorMessageForPhoneNumber: Record<string, string> = {
        required: "Lütfen telefon numaranızı girin",

    }
}