// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for image-duo documents
 */
interface ImageDuoDocumentData {
  /**
   * Image gauche field in *image-duo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image-duo.image-1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  "image-1": prismic.ImageField<never>;

  /**
   * Image droite field in *image-duo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image-duo.image-2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  "image-2": prismic.ImageField<never>;
}

/**
 * image-duo document from Prismic
 *
 * - **API ID**: `image-duo`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ImageDuoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ImageDuoDocumentData>,
    "image-duo",
    Lang
  >;

/**
 * Content for image-full documents
 */
interface ImageFullDocumentData {
  /**
   * image en pleine largeur field in *image-full*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image-full.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * image-full document from Prismic
 *
 * - **API ID**: `image-full`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ImageFullDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ImageFullDocumentData>,
    "image-full",
    Lang
  >;

/**
 * Content for legal_notices documents
 */
interface LegalNoticesDocumentData {
  /**
   * me-first-name field in *legal_notices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Thomas
   * - **API ID Path**: legal_notices.me-first-name
   * - **Tab**: me
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "me-first-name": prismic.KeyTextField;

  /**
   * me-last-name field in *legal_notices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Auffroy
   * - **API ID Path**: legal_notices.me-last-name
   * - **Tab**: me
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "me-last-name": prismic.KeyTextField;

  /**
   * me-address field in *legal_notices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Adresse de mon entreprise
   * - **API ID Path**: legal_notices.me-address
   * - **Tab**: me
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "me-address": prismic.KeyTextField;

  /**
   * me-email field in *legal_notices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Mél permettant de contacter mon entreprise
   * - **API ID Path**: legal_notices.me-email
   * - **Tab**: me
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "me-email": prismic.KeyTextField;

  /**
   * me-phone-number field in *legal_notices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: N° de téléphone permettant de contacter mon entreprise
   * - **API ID Path**: legal_notices.me-phone-number
   * - **Tab**: me
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "me-phone-number": prismic.KeyTextField;

  /**
   * me-tva-number field in *legal_notices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Laissez vide si non-déclaré
   * - **API ID Path**: legal_notices.me-tva-number
   * - **Tab**: me
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "me-tva-number": prismic.KeyTextField /**
   * host-name field in *legal_notices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Nom ou dénomination sociale
   * - **API ID Path**: legal_notices.host-name
   * - **Tab**: host
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  "host-name": prismic.KeyTextField;

  /**
   * host-adress field in *legal_notices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: legal_notices.host-adress
   * - **Tab**: host
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "host-adress": prismic.KeyTextField;

  /**
   * host-phone-number field in *legal_notices*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: legal_notices.host-phone-number
   * - **Tab**: host
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "host-phone-number": prismic.KeyTextField;
}

/**
 * legal_notices document from Prismic
 *
 * - **API ID**: `legal_notices`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LegalNoticesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LegalNoticesDocumentData>,
    "legal_notices",
    Lang
  >;

/**
 * Content for media documents
 */
interface MediaDocumentData {
  /**
   * media field in *media*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: media.media
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  media: prismic.LinkToMediaField;
}

/**
 * media document from Prismic
 *
 * - **API ID**: `media`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MediaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<MediaDocumentData>, "media", Lang>;

/**
 * Content for media-component documents
 */
interface MediaComponentDocumentData {
  /**
   * Média principal field in *media-component*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: media-component.media_principal
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  media_principal: prismic.LinkToMediaField;

  /**
   * Média secondaire field in *media-component*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: media-component.media_secondaire
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  media_secondaire: prismic.LinkToMediaField;
}

/**
 * media-component document from Prismic
 *
 * - **API ID**: `media-component`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MediaComponentDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MediaComponentDocumentData>,
    "media-component",
    Lang
  >;

/**
 * Content for media-component-full documents
 */
interface MediaComponentFullDocumentData {
  /**
   * media field in *media-component-full*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: media-component-full.media
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  media: prismic.LinkToMediaField;
}

/**
 * media-component-full document from Prismic
 *
 * - **API ID**: `media-component-full`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MediaComponentFullDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MediaComponentFullDocumentData>,
    "media-component-full",
    Lang
  >;

/**
 * Content for media-duo documents
 */
interface MediaDuoDocumentData {
  /**
   * left-media-thumbnail field in *media-duo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: media-duo.left-media-thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  "left-media-thumbnail": prismic.ImageField<never>;

  /**
   * left-media-content field in *media-duo*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: Audio ou vidéo /!\ Si image, mettre seulement dans la thumbnail.
   * - **API ID Path**: media-duo.left-media-content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  "left-media-content": prismic.LinkToMediaField;

  /**
   * right-media-thumbnail field in *media-duo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: media-duo.right-media-thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  "right-media-thumbnail": prismic.ImageField<never>;

  /**
   * right-media-content field in *media-duo*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: Audio ou vidéo /!\ Si image, mettre seulement dans la thumbnail.
   * - **API ID Path**: media-duo.right-media-content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  "right-media-content": prismic.LinkToMediaField;
}

/**
 * media-duo document from Prismic
 *
 * - **API ID**: `media-duo`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MediaDuoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MediaDuoDocumentData>,
    "media-duo",
    Lang
  >;

/**
 * Content for media-full documents
 */
interface MediaFullDocumentData {
  /**
   * full-media-thumbnail field in *media-full*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: media-full.full-media-thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  "full-media-thumbnail": prismic.ImageField<never>;

  /**
   * full-media-content field in *media-full*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: Audio ou vidéo /!\ Si image, mettre seulement dans la thumbnail.
   * - **API ID Path**: media-full.full-media-content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  "full-media-content": prismic.LinkToMediaField;
}

/**
 * media-full document from Prismic
 *
 * - **API ID**: `media-full`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MediaFullDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MediaFullDocumentData>,
    "media-full",
    Lang
  >;

/**
 * Item in *projet → Compétences mise en oeuvre*
 */
export interface ProjetDocumentDataSkillsItem {
  /**
   * Une compétence field in *projet → Compétences mise en oeuvre*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projet.skills[].skill
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skill: prismic.KeyTextField;
}

/**
 * Item in *projet → Liste des médias*
 */
export interface ProjetDocumentDataMediasItem {
  /**
   * media field in *projet → Liste des médias*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: projet.medias[].media
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  media: prismic.ContentRelationshipField<
    "image-duo" | "image-full" | "media" | "media-component-full"
  >;
}

/**
 * Content for projet documents
 */
interface ProjetDocumentData {
  /**
   * Titre du projet field in *projet*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projet.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Url du projet field in *projet*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: projet.url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField;

  /**
   * Date de réalisation field in *projet*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: projet.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Compétences mise en oeuvre field in *projet*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: projet.skills[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  skills: prismic.GroupField<Simplify<ProjetDocumentDataSkillsItem>>;

  /**
   * Description du projet field in *projet*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projet.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Liste des médias field in *projet*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: projet.medias[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  medias: prismic.GroupField<Simplify<ProjetDocumentDataMediasItem>>;

  /**
   * Image pour le format responsive field in *projet*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projet.image-mobile
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  "image-mobile": prismic.ImageField<never>;
}

/**
 * projet document from Prismic
 *
 * - **API ID**: `projet`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjetDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProjetDocumentData>,
    "projet",
    Lang
  >;

interface VideoFullDocumentData {}

/**
 * video-full document from Prismic
 *
 * - **API ID**: `video-full`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type VideoFullDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<VideoFullDocumentData>,
    "video-full",
    Lang
  >;

/**
 * Item in *website → Liste de lien*
 */
export interface WebsiteDocumentDataLinksItem {
  /**
   * Nom field in *website → Liste de lien*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.links[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * link field in *website → Liste de lien*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: website.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *website → Vos projets présent ici s'afficheront sur votre site*
 */
export interface WebsiteDocumentDataProjectsItem {
  /**
   * Un projet field in *website → Vos projets présent ici s'afficheront sur votre site*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: website.projects[].project
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project: prismic.ContentRelationshipField<"projet">;
}

/**
 * Content for website documents
 */
interface WebsiteDocumentData {
  /**
   * email field in *website*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.email
   * - **Tab**: options
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * accent-color field in *website*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: website.accent-color
   * - **Tab**: options
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  "accent-color": prismic.ColorField;

  /**
   * background-color field in *website*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: website.background-color
   * - **Tab**: options
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  "background-color": prismic.ColorField;

  /**
   * text-color field in *website*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: website.text-color
   * - **Tab**: options
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  "text-color": prismic.ColorField;

  /**
   * text-accent-color field in *website*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: website.text-accent-color
   * - **Tab**: options
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  "text-accent-color": prismic.ColorField;

  /**
   * Image de fin des projets field in *website*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: website.ending-card-image
   * - **Tab**: options
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  "ending-card-image": prismic.ImageField<never> /**
   * Texte déroulant field in *website*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.text-header
   * - **Tab**: header
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  "text-header": prismic.KeyTextField /**
   * Liste de lien field in *website*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: website.links[]
   * - **Tab**: footer
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  links: prismic.GroupField<Simplify<WebsiteDocumentDataLinksItem>> /**
   * Titre pour le SEO field in *website*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.seo-title
   * - **Tab**: seo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  "seo-title": prismic.KeyTextField;

  /**
   * Description pour le SEO field in *website*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.seo-description
   * - **Tab**: seo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "seo-description": prismic.KeyTextField;

  /**
   * og-url field in *website*
   *
   * - **Field Type**: Text
   * - **Placeholder**: This should be the undecorated URL, without session variables, user identifying parameters, or counters.
   * - **API ID Path**: website.og-url
   * - **Tab**: seo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "og-url": prismic.KeyTextField;

  /**
   * og-image field in *website*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: website.og-image
   * - **Tab**: seo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  "og-image": prismic.ImageField<never>;

  /**
   * Favicon field in *website*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: website.seo-favicon
   * - **Tab**: seo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  "seo-favicon": prismic.ImageField<"small"> /**
   * Prénom field in *website*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.first-name
   * - **Tab**: about
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  "first-name": prismic.KeyTextField;

  /**
   * Nom field in *website*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.last-name
   * - **Tab**: about
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  "last-name": prismic.KeyTextField;

  /**
   * Description field in *website*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.description
   * - **Tab**: about
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * La plus belle photo de vous *_* field in *website*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: website.about-image
   * - **Tab**: about
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  "about-image": prismic.ImageField<never> /**
   * Vos projets présent ici s'afficheront sur votre site field in *website*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: website.projects[]
   * - **Tab**: projects
   * - **Documentation**: https://prismic.io/docs/field#group
   */;
  projects: prismic.GroupField<Simplify<WebsiteDocumentDataProjectsItem>>;
}

/**
 * website document from Prismic
 *
 * - **API ID**: `website`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WebsiteDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<WebsiteDocumentData>,
    "website",
    Lang
  >;

export type AllDocumentTypes =
  | ImageDuoDocument
  | ImageFullDocument
  | LegalNoticesDocument
  | MediaDocument
  | MediaComponentDocument
  | MediaComponentFullDocument
  | MediaDuoDocument
  | MediaFullDocument
  | ProjetDocument
  | VideoFullDocument
  | WebsiteDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ImageDuoDocument,
      ImageDuoDocumentData,
      ImageFullDocument,
      ImageFullDocumentData,
      LegalNoticesDocument,
      LegalNoticesDocumentData,
      MediaDocument,
      MediaDocumentData,
      MediaComponentDocument,
      MediaComponentDocumentData,
      MediaComponentFullDocument,
      MediaComponentFullDocumentData,
      MediaDuoDocument,
      MediaDuoDocumentData,
      MediaFullDocument,
      MediaFullDocumentData,
      ProjetDocument,
      ProjetDocumentData,
      ProjetDocumentDataSkillsItem,
      ProjetDocumentDataMediasItem,
      VideoFullDocument,
      VideoFullDocumentData,
      WebsiteDocument,
      WebsiteDocumentData,
      WebsiteDocumentDataLinksItem,
      WebsiteDocumentDataProjectsItem,
      AllDocumentTypes,
    };
  }
}
