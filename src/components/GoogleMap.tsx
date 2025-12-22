'use client'

const GoogleMap = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54136.957525395606!2d29.104730851297017!3d41.04297299307188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacfd8c0668457%3A0xdda2d4d49d10a821!2zS2FidXJnYWPEsSBHeWJ5IC0gw5dla21la8O2eQ!5e0!3m2!1str!2str!4v1766398548562!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      />
    </div>
  )
}

export default GoogleMap