import Header from "./components/Header";
import "./globals.css";
import Section from "./components/Section";
import Div_Section from "./components/Div_section";
import Title from "./components/Title";

export default function Home() {
  return (
    <>
      <Header />

      <main className="grid grid-cols-3 gap-20 mt-7 mb-7 ml-20 mr-20">
        <div className="col-span-2">
          <section id="section_1">
            <Title title="Últimas Novidades em Tecnologia" />

            <Section
              style="bg-blue-500 text-white mb-20"
              title="Gadgets do Futuro: Tecnologias Emergentes"
              paragrafo="Neste artigo, exploramos os avanços tecnológicos
                    mais recentes e fascinantes que prometem transformar
                    nosso futuro. Desde dispositivos inovadores até
                    tecnologias emergentes, os gadgets apresentados
                    aqui têm o potencial de revolucionar várias áreas de nossas vidas."
              lista={[
                "Gadget A: Este dispositivo revolucionário combina inteligência artificial e realidade aumentada para oferecer uma experiência única de aprendizado.",
                "Gadget B: Uma nova geração de dispositivos de saúde que monitora continuamente os sinais vitais e fornece diagnósticos em tempo real.",
                "Gadget C: Uma inovação no campo da mobilidade urbana, este gadget elétrico autônomo promete revolucionar o transporte nas cidades.",
              ]}
              imgSrc="img_section_1/4.jpg"
            />

            <Section
              style="bg-blue-500 text-white mb-20"
              title="Tendências em Inteligência Artificial"
              paragrafo="Este artigo explora as tendências mais recentes em Inteligência 
              Artificial (IA) e seu impacto na transformação de múltiplos setores. A IA 
              está revolucionando a maneira como negócios, saúde, educação e muitos outros 
              campos operam, trazendo avanços inovadores e soluções práticas. A Inteligência 
              Artificial continua a evoluir e a moldar significativamente várias indústrias. 
              À medida que as inovações em IA avançam, é fundamental estar ciente dessas 
              tendências para aproveitar ao máximo suas aplicações e benefícios."
              lista={[
                "Setor de Saúde: Descrição de como a IA está sendo usada para diagnósticos médicos precisos e previsões de doenças.",
                "Setor de Educação: Como a IA está personalizando a aprendizagem e melhorando os métodos de ensino.",
                "Setor de Financeiro: Uso da IA para análise de dados, previsão de mercado e segurança cibernética.",
                "Setor de Varejo: Como a IA está personalizando a aprendizagem e melhorando os métodos de ensino.",
              ]}
              imgSrc="img_section_1/5.jpg"
            />

            <Section
              style="bg-blue-500 text-white mb-20"
              title="Desenvolvimento de Aplicativos: Dicas para Iniciantes"
              paragrafo="Desenvolver aplicativos pode ser uma jornada emocionante, mas
                  também desafiadora para iniciantes. Aqui estão algumas dicas
                  fundamentais para começar sua jornada no desenvolvimento de
                  aplicativos:"
              lista={[
                "Escolha da Plataforma e Linguagens Fundamentais: Escolha a ulataforma (Android, iOS, Web) e aprenda as linguagens associadas (Java, Kotlin, Swift, HTML, CSS, JavaScript) para essa plataforma.",
                "Compreenda Fundamentos de Design (UI/UX): Entenda os conceitos de Design de Interface do Usuário (UI) e Experiência do Usuário (UX) para criar aplicativos funcionais e atraentes.",
                "Pratique com Projetos Pequenos e Experimente: Inicie com pequenos projetos para aplicar o aprendizado Experimente diferentes linguagens, frameworks bibliotecas para adquirir experiência prática.",
              ]}
              imgSrc="img_section_1/6.jpg"
            />
          </section>

          <section id="section_2">
            <Title title="Recomendações" />

            <div className="grid grid-cols-2 gap-4">
              <Div_Section
                title="Clean Code: A Handbook of Agile Software Craftsmanship"
                paragrafo="Este livro é um guia essencial para desenvolvedores,
                    oferecendo princípios e práticas para escrever códigos
                    limpos, legíveis e eficientes. Aborda técnicas de
                    programação e padrões que visam melhorar a qualidade do
                    código."
                imgSrc="img_section_2/clean_code.jpg"
              />

              <Div_Section
                title="Entendendo algoritmos"
                paragrafo="Este livro abrange uma ampla gama de algoritmos e estruturas
                    de dados, apresentando explicações detalhadas, análises e
                    exemplos para entender e implementar algoritmos eficientes
                    em diferentes contextos de programação."
                imgSrc="img_section_2/algoritmos.webp"
              />
            </div>
          </section>
        </div>

        <aside>
          <Section
            style="border-4 border-blue-900 mb-20"
            title="Agenda de Eventos Tech"
            paragrafo="Calendário de conferências, exposições e eventos importantes na
              área de tecnologia."
            lista={[
              "Conferência TechX 2023 - 10 a 12 de Março de 2023",
              "ExpoTech 2023 - 25 a 28 de Maio de 2023",
              "DevSummit 2023 - 15 a 18 de Agosto de 2023",
              "AI Conference 2023 - 5 a 7 de Outubro de 2023",
            ]}
          />

          <Section
            style="border-4 border-blue-900 mb-20"
            title="Workshops e Cursos"
            paragrafo="Informações sobre cursos online, workshops e palestras sobre temas
              tech."
            lista={[
              "Curso Online: Introdução ao Desenvolvimento Web - Oferecido pela Tech Academy, inscrições abertas.",
              "Workshop de Python para Iniciantes - Data: 20 de Abril de 2023. Local: Centro de Convenções TechHub.",
              "Palestra: Introdução à Inteligência Artificial - Data: 5 de Julho de 2023. Local: Universidade Central.",
            ]}
          />
        </aside>
      </main>

      <footer className="bg-indigo-600 flex justify-center items-center p-20">
        <img className="h-40 w-50" src="logo.png" alt="logo" />
      </footer>
    </>
  );
}
