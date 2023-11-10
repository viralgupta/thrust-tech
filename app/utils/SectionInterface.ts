export default interface Section {
    id: string;
    heading: string;
    content: string;
    heading2?: string;
    content2?: string;
    button?: string;
    hasModel: boolean;
    modelName?: string;
    zoomLevel?: number;
    hasPhotosorVideos: boolean;
    onHomePage: boolean;
    homeButton?: string;
    homeType?: string;
    homeRedirectPage?: string;
    onProductPage: boolean;
    onEventPage: boolean
    photoArray: string[];
    modelLocation: string;
}