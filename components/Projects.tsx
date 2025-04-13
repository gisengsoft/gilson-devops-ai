
export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {['project1.jpg', 'project2.jpg', 'project3.jpg'].map((img, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={"/images/" + img}
              alt={"Project " + (i + 1)}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 font-bold">Project {i + 1}</h3>
            <p className="text-sm text-gray-600 mt-2">Descrição do projeto {i + 1}.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
